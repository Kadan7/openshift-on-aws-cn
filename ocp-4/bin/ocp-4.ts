#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { Ocp4Stack } from '../lib/ocp-4-stack';

const app = new cdk.App();
new Ocp4Stack(app, 'Ocp4Stack');
