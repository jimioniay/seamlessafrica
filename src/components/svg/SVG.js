import React from 'react';

import GrainWallet from './GrainWallet';
import SimpleFast from './SimpleFast';
import Arrow from './Arrow';
import Dotted from './Dotted';
import LowTF from './LowTF';
import Norton from './Norton';
import SAFLogo from './SAFLogo';
import SaveSecure from './SaveSecure';
import Works from './Works';
import HarmBurger from './HarmBurger';
import Select from './Select';
import IOS from './IOS';
import Android from './Android';
import Payoneer from './Payoneer';
import Lloyds from './Lloyds';
import Paypal from './Paypal';
import PushPin from './PushPin';
import Anytime from './Anytime';
import StartUp from './StartUp';
import Checkbox from './Checkbox';
import AppInterface from './AppInterface';

const SVG = ({ name, className }) => {
  const getSvg = () => {
    switch (name) {
      case 'wallet':
        return <GrainWallet />;
      case 'simplefast':
        return <SimpleFast />;
      case 'arrow':
        return <Arrow />;
      case 'dotted':
        return <Dotted />;
      case 'lowtf':
        return <LowTF />;
      case 'norton':
        return <Norton />;
      case 'saf-logo':
        return <SAFLogo />;
      case 'savesecure':
        return <SaveSecure />;
      case 'works':
        return <Works />;
      case 'harmburger':
        return <HarmBurger />;
      case 'ios-store':
        return <IOS />;
      case 'android-store':
        return <Android />;
      case 'android':
        return <Android />;
      case 'payoneer':
        return <Payoneer />;
      case 'lloyds':
        return <Lloyds />;
      case 'paypal':
        return <Paypal />;
      case 'app-interface':
        return <AppInterface />;
      case 'pushpin':
        return <PushPin />;
      case 'anytime':
        return <Anytime />;
      case 'startup':
        return <StartUp />;
      case 'checkbox':
        return <Checkbox />;
      case 'select':
        return <Select className={className} />;
      default:
        return <SimpleFast />;
    }
  };

  return getSvg();
};

export default SVG;
