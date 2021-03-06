export type IPublicKey = import('@virgilsecurity/e3kit-base').IPublicKey;
export type EThreeBaseInitializeOptions = import('@virgilsecurity/e3kit-base').EThreeInitializeOptions;
export type EThreeBaseCtorOptions = import('@virgilsecurity/e3kit-base').EThreeCtorOptions;

export type KeyPairType = import('virgil-crypto').KeyPairType;

export interface EThreeInitializeOptions extends EThreeBaseInitializeOptions {
    keyPairType?: KeyPairType;
}

export interface EThreeCtorOptions extends EThreeBaseCtorOptions {
    keyPairType?: KeyPairType;
}
