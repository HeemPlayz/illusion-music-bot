const cfg = [];

// Discord config, see the README for help
cfg.discord = {
    prefix: '!',
    admins: [
        '492552276326481930' // Your ID Here
    ]
};

// General options, see the README for help
cfg.options = {
    defaultVolume: 100 // Sets the default volume percent on join
};

// YouTube API Key, see the README for help
cfg.api = {
    youtube: 'AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4'
};

// Lavalink config, see the README for help
cfg.lavalink = {
    node: {
        host: '127.0.0.1',
        port: 987,
        password: 'ReadTheREADMEForMoreInformation'
    },
    rest: {
        host: '127.0.0.1',
        port: 2333,
        password: 'ReadTheREADMEForMoreInformation'
    }
};

module.exports = cfg;
