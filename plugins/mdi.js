import Vue from 'vue'
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'
import ChevronUpIcon from 'vue-material-design-icons/ChevronUp.vue'
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'
import PlusThickIcon from 'vue-material-design-icons/PlusThick.vue'
import MinusThickIcon from 'vue-material-design-icons/MinusThick.vue'
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue'
import ArrowRightIcon from 'vue-material-design-icons/ArrowRight.vue'
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue'
import SegmentIcon from 'vue-material-design-icons/Segment.vue'
import CloseIcon from 'vue-material-design-icons/Close.vue'
import CheckIcon from 'vue-material-design-icons/Check.vue'
import CheckDecagramOutlineIcon from 'vue-material-design-icons/CheckDecagramOutline.vue'
import DownloadIcon from 'vue-material-design-icons/Download.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'

import InstagramIcon from 'vue-material-design-icons/Instagram.vue'
import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import EmailIcon from 'vue-material-design-icons/Email.vue'

import CartOutlineIcon from 'vue-material-design-icons/CartOutline.vue'
import MapOutlineIcon from 'vue-material-design-icons/MapOutline.vue'
import FormatListChecksIcon from 'vue-material-design-icons/FormatListChecks.vue'
import CalendarOutlineIcon from 'vue-material-design-icons/CalendarOutline.vue'
import FinanceIcon from 'vue-material-design-icons/Finance.vue'
import ToolsIcon from 'vue-material-design-icons/Tools.vue'
import ViewDashboardOutlineIcon from 'vue-material-design-icons/ViewDashboardOutline.vue'
import ChartGanttIcon from 'vue-material-design-icons/ChartGantt.vue'
import PuzzleOutlineIcon from 'vue-material-design-icons/PuzzleOutline.vue'
import ResponsiveIcon from 'vue-material-design-icons/Responsive.vue'
import CloudLockOutlineIcon from 'vue-material-design-icons/CloudLockOutline.vue'
import ClockCheckOutlineIcon from 'vue-material-design-icons/ClockCheckOutline.vue'
import AccountKeyOutlineIcon from 'vue-material-design-icons/AccountKeyOutline.vue'
import FileDownloadOutlineIcon from 'vue-material-design-icons/FileDownloadOutline.vue'
import TrendingUpIcon from 'vue-material-design-icons/TrendingUp.vue'
import SpeedometerIcon from 'vue-material-design-icons/Speedometer.vue'
import CurrencyUsdIcon from 'vue-material-design-icons/CurrencyUsd.vue'
import AccountAlertOutlineIcon from 'vue-material-design-icons/AccountAlertOutline.vue'
import GoogleCirclesExtendedIcon from 'vue-material-design-icons/GoogleCirclesExtended.vue'
import CellphoneIcon from 'vue-material-design-icons/Cellphone.vue'
import LightningBoltOutlineIcon from 'vue-material-design-icons/LightningBoltOutline.vue'
import WhatsappIcon from 'vue-material-design-icons/Whatsapp.vue'
import CircleSmallIcon from 'vue-material-design-icons/CircleSmall.vue'

const components = {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
  PlusThickIcon,
  MinusThickIcon,
  ArrowUpIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CheckDecagramOutlineIcon,
  CheckIcon,
  SegmentIcon,
  CloseIcon,
  DownloadIcon,
  MenuIcon,

  CartOutlineIcon,
  MapOutlineIcon,
  FormatListChecksIcon,
  CalendarOutlineIcon,
  FinanceIcon,
  ToolsIcon,
  ViewDashboardOutlineIcon,
  ChartGanttIcon,

  PuzzleOutlineIcon,
  ResponsiveIcon,
  CloudLockOutlineIcon,
  ClockCheckOutlineIcon,
  AccountKeyOutlineIcon,
  FileDownloadOutlineIcon,

  TrendingUpIcon,
  SpeedometerIcon,
  CurrencyUsdIcon,
  AccountAlertOutlineIcon,
  GoogleCirclesExtendedIcon,
  CellphoneIcon,
  LightningBoltOutlineIcon,
  
  InstagramIcon,
  EmailIcon,
  PhoneIcon,
  FacebookIcon,
  WhatsappIcon,

  CircleSmallIcon
}

Object.entries(components).forEach(([name, component]) =>
  Vue.component(name, component)
)
