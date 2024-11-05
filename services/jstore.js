import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAtom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { keyBy, values } from "lodash";
import moment from "moment";
import { useState } from "react";

/**
 * @typedef {Object} Entry
 * @prop {`YYYY-MM-DD`} date
 * @prop {string} environmentalFactor
 * @prop {number} mood
 * @prop {string} moodDescription
 */
/** @typedef {Entry[]} Journal */

const /** @type {@type {ReturnType<typeof createJSONStorage<User>>}} */ userJsonStorage = createJSONStorage(() => AsyncStorage);
const /** @type {@type {ReturnType<typeof createJSONStorage<Journal>>}} */ journalJsonStorage = createJSONStorage(() => AsyncStorage);

// const journalAtom = atomWithStorage("journal", /** @type {Journal}*/ ([]), undefined, { getOnInit: true });
const journalAtom = atomWithStorage("journal", /** @type {Journal}*/ ([]), journalJsonStorage, { getOnInit: true });

/**
 * @typedef {Object} User
 * @prop {string} username
 * @prop {string} name
 * @prop {string} password
 * @prop {boolean?} signedIn
 */

const userAtom = atomWithStorage("user", /**@type {User} */ (null), userJsonStorage, { getOnInit: true });
export const useJournalAtom = () => useAtom(journalAtom);
export const useUserAtom = () => useAtom(userAtom);

export const parseYMD = (/** @type {moment.Moment|Date}} */ date) => moment(date).format("YYYY-MM-DD");

export const parseMDY = (/** @type {moment.Moment|Date}} */ date) => moment(date).format("MMM-DD-YYYY");
export const startOfDay = (/** @type {moment.Moment|Date} */ date) => moment(date).startOf("day");

export const useDateJournal = (/** @type {{date:ReturnType<moment>|null}}*/ { date: pDate } = { date: startOfDay(moment()) }) => {
  const [journal, setJournal] = useJournalAtom();
  const [date, _setDate] = useState(startOfDay(pDate ?? new Date()));

  const keyedJournal = keyBy(journal, (e) => e.date);
  const entry = { date: date.toISOString(), ...keyedJournal[date.toISOString()] };

  const setEntry = (/** @type {Entry} */ entry) => {
    if (!entry?.date) throw new Error("Error: invalid date");

    setJournal(async (_prevJournal) => {
      const prevJournal = await _prevJournal;
      const prevKeyed = keyBy(/** @type {Journal}*/ (prevJournal), (e) => e.date);
      prevKeyed[entry.date] = entry;
      const updates = [...values(prevKeyed)].filter((e) => Object.keys(e).length >= 2);
      // console.log(JSON.stringify({ updates, prevJournal, entry }, undefined, 2));
      return updates;
    });
  };

  const setDate = (/** @type {moment.Moment|Date} */ date) => _setDate(startOfDay(date));

  // console.log("useDateJournal", JSON.stringify({ entry, journal, date: date?.toString() }, null, 4));

  return (
    /** @type {[
    [typeof date,typeof entry,Journal,typeof keyedJournal],
    [typeof setDate,typeof setEntry, typeof setJournal]
    ]}*/ ([
      [date, entry, journal, keyedJournal],
      [setDate, setEntry, setJournal],
    ])
  );
};
