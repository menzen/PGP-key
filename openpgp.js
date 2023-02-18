import * as openpgp from 'openpgp';

const armoredMessage = `-----BEGIN PGP MESSAGE-----

wy4ECQMIhbRzmsnYZTPgY6Wua55iRJgkCiE2DDfVbubLlUrcph2Z6DxAlbOF
l56y0osBC12PpOOXl0SKZuB/tbrD8aHlyyRbhIosdd4OEzv81gRXEgFgWGLH
HoIvYt/gkiLc87zEM2bjhPOHI2Kqw1PwrOeL23inFTZULY8kBxVbpMg/aivw
LS3QQrQiVIWFUj9qEY0IOmK/DAqstnHG6ARWPA05uHgeDKTzQ9JZlyWlfSWu
jOS1azBswHAs
=zSxd
-----END PGP MESSAGE-----`;

(async () => {
    const encryptedMessage = await openpgp.readMessage({
        armoredMessage
    });
    const { data: decrypted } = await openpgp.decrypt({
        message: encryptedMessage,
        passwords: [''],
    });
    console.log(decrypted);
})();