/*jslint node: true */
"use strict";

exports.COUNT_WITNESSES = 12;
exports.MAX_WITNESS_LIST_MUTATIONS = 1;
exports.TOTAL_WHITEBYTES = 1e15;
exports.MAJORITY_OF_WITNESSES = (exports.COUNT_WITNESSES%2===0) ? (exports.COUNT_WITNESSES/2+1) : Math.ceil(exports.COUNT_WITNESSES/2);
exports.COUNT_MC_BALLS_FOR_PAID_WITNESSING = 100;

exports.version = '1.0t';
exports.alt = '2';

exports.GENESIS_UNIT = (exports.alt === '2') ? 'bKGxj++wVgsHOMGLa/XgFMnpLbTWmKLhRL9e+brm1T0=' : 'ogf38q2JkBtVjL5XNW9BYNDqu1M1q/yYggNpEqKmg+8=';
exports.BLACKBYTES_ASSET = (exports.alt === '2') ? 'yN6xDyMbuo4Sxgrzn/YS0+rOMBFCx8zc0JS+SjLaLpQ=' : 'JY4RvlUGv0qWItikizmNOIjIYZeEciODOog8AzLju50=';

exports.HASH_LENGTH = 44;
exports.PUBKEY_LENGTH = 44;
exports.SIG_LENGTH = 88;

// anti-spam limits
exports.MAX_AUTHORS_PER_UNIT = 16;
exports.MAX_MESSAGES_PER_UNIT = 128;
exports.MAX_SPEND_PROOFS_PER_MESSAGE = 128;
exports.MAX_INPUTS_PER_PAYMENT_MESSAGE = 128;
exports.MAX_OUTPUTS_PER_PAYMENT_MESSAGE = 128;
exports.MAX_CHOICES_PER_POLL = 128;
exports.MAX_DENOMINATIONS_PER_ASSET_DEFINITION = 64;
exports.MAX_ATTESTORS_PER_ASSET = 64;
exports.MAX_DATA_FEED_NAME_LENGTH = 64;
exports.MAX_DATA_FEED_VALUE_LENGTH = 64;
