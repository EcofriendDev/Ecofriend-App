import { Image } from "react-native";

import FilledCirclePlus from "@/assets/add-button.png";
import CircleDownIcon from "@/assets/arrowdowncircle.png";
import ArrowLeftMiniCircleIcon from "@/assets/arrowrightminicircle.png";
import SettingsIcon from "@/assets/cogworkloadingcoggearsettingsmachine.png";
import ManWithAPot from "@/assets/drawing.png";
import EarthlyWoman from "@/assets/earthly_woman.png";
import EcoHero2Icon from "@/assets/EcoHeroDavidAttenborough.png";
import EcoHero1Icon from "@/assets/EcoheroGretaThunberg.png";
import EcoHero3Icon from "@/assets/EcoHeroJaneGoodall.png";
import ProfileIcon from "@/assets/ellipse-26.png";
import CloseIcon from "@/assets/exit-x.png";
import ExplorePageIcon from "@/assets/ExplorePageIcon.png";
import HomeIcon from "@/assets/home3homehouseroofshelter.png";
import PencilIcon from "@/assets/icon1.png";
import PotBehindMan from "@/assets/image.png";
import JournalPageIcon from "@/assets/JournalPageIcon.png";
import ExploreIcon from "@/assets/magnifyingglassglasssearchmagnifying1.png";
import MainPageIcon from "@/assets/MainPageIcon.png";
import OnboardingCommunity from "@/assets/OnboardingCommunity.png";
import OnboardingSketch from "@/assets/OnboardingSketch.png";
import Therapist1Icon from "@/assets/TherapistAmyColeman.png";
import Therapist2Icon from "@/assets/TherapistMaiaKiley.png";
import Therapist3Icon from "@/assets/TherapistMichaelBurke.png";
import ArrowRightIcon from "@/assets/vector-2-stroke.png";
import ConnectIcon from "@/assets/vector.png";
import JournalIcon from "@/assets/vector1.png";
import { sxUtilities } from "@/GlobalStyles";

export const ImageAndIconAssets = {
  Profile: ProfileIcon,
  Home: HomeIcon,
  Connect: ConnectIcon,
  Explore: ExploreIcon,
  Journal: JournalIcon,
  Settings: SettingsIcon,
  ArrowLeftMiniCircle: ArrowLeftMiniCircleIcon,
  Close: CloseIcon,
  CircleDown: CircleDownIcon,
  Pencil: PencilIcon,
  ArrowRight: ArrowRightIcon,
  EarthlyWoman: EarthlyWoman,
  ManWithAPot: ManWithAPot,
  Therapist1Icon: Therapist1Icon,
  Therapist2Icon: Therapist2Icon,
  Therapist3Icon: Therapist3Icon,
  EcoHero1Icon: EcoHero1Icon,
  EcoHero2Icon: EcoHero2Icon,
  EcoHero3Icon: EcoHero3Icon,
  JournalPageIcon: JournalPageIcon,
  ExplorePageIcon: ExplorePageIcon,
  MainPageIcon: MainPageIcon,
  OnboardingCommunity: OnboardingCommunity,
  OnboardingSketch: OnboardingSketch,
  FilledCirclePlus,
  PotBehindMan,
};

export const Icon = (
  /** @type {{iconName?: keyof typeof ImageAndIconAssets, iconAsset?: any, scale?: number } & React.ComponentProps<typeof Image>} */ {
    iconName,
    style,
    iconAsset,
    scale = 1,
    ...props
  }
) => {
  const scaledWidth = sxUtilities.navIcon.width * scale;
  return <Image style={{ width: scaledWidth, height: scaledWidth }} source={iconAsset ?? ImageAndIconAssets[iconName]} {...props} />;
};
