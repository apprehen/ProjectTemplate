// This file is created by egg-ts-helper@1.35.1
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportBase from '../../../app/controller/base';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    base: ExportBase;
    home: ExportHome;
  }
}
