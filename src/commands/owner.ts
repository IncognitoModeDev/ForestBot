import { ForestBotApiClient } from 'forestbot-api';
import type Bot from '../structure/mineflayer/Bot.js';

export default {
    commands: ["owner", "master"],
    minArgs: 0,
    maxArgs: 1,
    execute: async (user, args, bot, api: ForestBotApiClient) => {
        return bot.bot.chat("I am a player ran bot and owned by Febzey#1854");
    }
 } as MCommand