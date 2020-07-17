import Role from './Role';
import Emoji from './Emoji';
import Channel from './Channel';
import VoiceState from './VoiceState';
import GuildMember from './GuildMember';
import PresenceUpdate from './PresenceUpdate';
export default class {
    private id;
    private name;
    private icon;
    private splash;
    private discoverySplash;
    private owner;
    private ownerID;
    private permissions;
    private region;
    private afkChannel;
    private afkTimeout;
    private embedEnabled;
    private embedChannel;
    private verificationLevel;
    private defMessageNotify;
    private explicitContentFilter;
    private roles;
    private emojis;
    private features;
    private mfaLevel;
    private applicationID;
    private widgetEnabled;
    private widgetChannel;
    private systemChannel;
    private rulesChannel;
    private joinedAt;
    private large;
    private unavailable;
    private memberCount;
    private voiceStates;
    private members;
    private channels;
    private presences;
    private maxPresences;
    private maxMembers;
    private vanityURL;
    private description;
    private banner;
    private premiumTier;
    private premiumSubCount;
    private preferredlocale;
    private updatesChannel;
    private maxChannelUsers;
    private approxMemberCount;
    private approxPresenceCount;
    constructor(id: string, name: string, icon: string, splash: string, discoverySplash: string, owner: boolean, ownerID: string, permissions: number, region: string, afkChannel: Channel, afkTimeout: number, embedEnabled: boolean, embedChannel: Channel, verificationLevel: number, defMessageNotify: number, explicitContentFilter: number, roles: Array<Role>, emojis: Array<Emoji>, features: Array<string>, mfaLevel: number, applicationID: string, widgetEnabled: boolean, widgetChannel: Channel, systemChannel: Channel, rulesChannel: Channel, joinedAt: number, large: boolean, unavailable: boolean, memberCount: number, voiceStates: Array<VoiceState>, members: Array<GuildMember>, channels: Array<Channel>, presences: Array<PresenceUpdate>, maxPresences: number, maxMembers: number, vanityURL: string, description: string, banner: string, premiumTier: number, premiumSubCount: number, preferredlocale: string, updatesChannel: Channel, maxChannelUsers: number, approxMemberCount: number, approxPresenceCount: number);
}