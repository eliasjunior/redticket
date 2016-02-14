import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {TreeService} from './app/services/tree-service'
//import {Header} from './app/header'

import {enableProdMode} from 'angular2/core';
enableProdMode();

import {SeedApp} from './app/seed-app';

bootstrap(SeedApp, [HTTP_PROVIDERS, ROUTER_PROVIDERS, TreeService])
  .catch(err => console.error(err));
