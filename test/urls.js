var urls = [{
        name: "qualified HTTP",
        url: "http://www.example.org/some/directory/file.html?query=string#fragment",
        parts: {
            protocol: 'http',
            username: undefined,
            password: undefined,
            host: 'www.example.org',
            port: undefined,
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        convinience: {
            isRelative: false,
            // host
            authority: 'www.example.org',
            domain: 'example.org',
            tld: 'org',
            hostIsName: true,
            hostIsIp: false,
            hostIsIp4: false,
            hostIsIp6: false,
            hostIsIdn: false,
            // path
            pathDirectory: '/some/directory',
            pathFilename: 'file.html',
            pathSuffix: 'html',
            // window.location compatibility
            hash: '#fragment',
            search: '?query=string',
            host: 'www.example.org',
            hostname: 'www.example.org'
        }
    }, {
        name: "complete URL",
        url: "scheme://user:pass@www.example.org:123/some/directory/file.html?query=string#fragment",
        parts: {
            protocol: 'scheme',
            username: 'user',
            password: 'pass',
            host: 'www.example.org',
            port: 123,
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        convinience: {
            isRelative: false,
            // host
            authority: 'user:pass@www.example.org:123',
            domain: 'example.org',
            tld: 'org',
            hostIsName: true,
            hostIsIp: false,
            hostIsIp4: false,
            hostIsIp6: false,
            hostIsIdn: false,
            // path
            pathDirectory: '/some/directory',
            pathFilename: 'file.html',
            pathSuffix: 'html',
            // window.location compatibility
            hash: '#fragment',
            search: '?query=string',
            host: 'www.example.org:123',
            hostname: 'www.example.org'
        }
    }, {
        name: "host-relative URL",
        url: "/some/directory/file.html?query=string#fragment",
        parts: {
            protocol: undefined,
            username: undefined,
            password: undefined,
            host: undefined,
            port: undefined,
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        convinience: {
            isRelative: true,
            // host
            authority: undefined,
            domain: undefined,
            tld: undefined,
            hostIsName: undefined,
            hostIsIp: undefined,
            hostIsIp4: undefined,
            hostIsIp6: undefined,
            hostIsIdn: undefined,
            // path
            pathDirectory: '/some/directory',
            pathFilename: 'file.html',
            pathSuffix: 'html',
            // window.location compatibility
            hash: '#fragment',
            search: '?query=string',
            host: undefined,
            hostname: undefined
        }
    }, {
        name: "path-relative URL",
        url: "../some/directory/file.html?query=string#fragment",
        parts: {
            protocol: undefined,
            username: undefined,
            password: undefined,
            host: undefined,
            port: undefined,
            path: '../some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        convinience: {
            isRelative: true,
            // host
            authority: undefined,
            domain: undefined,
            tld: undefined,
            hostIsName: undefined,
            hostIsIp: undefined,
            hostIsIp4: undefined,
            hostIsIp6: undefined,
            hostIsIdn: undefined,
            // path
            pathDirectory: '../some/directory',
            pathFilename: 'file.html',
            pathSuffix: 'html',
            // window.location compatibility
            hash: '#fragment',
            search: '?query=string',
            host: undefined,
            hostname: undefined
        }
    }, {
        name: "missing scheme",
        url: "user:pass@www.example.org:123/some/directory/file.html?query=string#fragment",
        parts: {
            protocol: undefined,
            username: undefined,
            password: undefined,
            host: undefined,
            port: undefined,
            path: 'user:pass@www.example.org:123/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        convinience: {
            isRelative: true,
            // host
            authority: undefined,
            domain: undefined,
            tld: undefined,
            hostIsName: undefined,
            hostIsIp: undefined,
            hostIsIp4: undefined,
            hostIsIp6: undefined,
            hostIsIdn: undefined,
            // path
            pathDirectory: 'user:pass@www.example.org:123/some/directory',
            pathFilename: 'file.html',
            pathSuffix: 'html',
            // window.location compatibility
            hash: '#fragment',
            search: '?query=string',
            host: undefined,
            hostname: undefined
        }
    }, {
        name: "ignoring scheme",
        url: "://user:pass@www.example.org:123/some/directory/file.html?query=string#fragment",
        parts: {
            protocol: '', // not undefined!
            username: 'user',
            password: 'pass',
            host: 'www.example.org',
            port: 123,
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        convinience: {
            isRelative: false,
            // host
            authority: 'user:pass@www.example.org:123',
            domain: 'example.org',
            tld: 'org',
            hostIsName: true,
            hostIsIp: false,
            hostIsIp4: false,
            hostIsIp6: false,
            hostIsIdn: false,
            // path
            pathDirectory: '/some/directory',
            pathFilename: 'file.html',
            pathSuffix: 'html',
            // window.location compatibility
            hash: '#fragment',
            search: '?query=string',
            host: 'www.example.org:123',
            hostname: 'www.example.org'
        }
    }, {
        name: "IPv4",
        url: "http://user:pass@123.123.123.123:123/some/directory/file.html?query=string#fragment",
        parts: {
            protocol: 'http',
            username: 'user',
            password: 'pass',
            host: '123.123.123.123',
            port: 123,
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        convinience: {
            isRelative: false,
            // host
            authority: 'user:pass@123.123.123.123:123',
            domain: undefined,
            tld: undefined,
            hostIsName: false,
            hostIsIp: true,
            hostIsIp4: true,
            hostIsIp6: false,
            hostIsIdn: false,
            // path
            pathDirectory: '/some/directory',
            pathFilename: 'file.html',
            pathSuffix: 'html',
            // window.location compatibility
            hash: '#fragment',
            search: '?query=string',
            host: '123.123.123.123:123',
            hostname: '123.123.123.123'
        }
    }, {
        name: "IPv6",
        url: "http://user:pass@fe80:0000:0000:0000:0204:61ff:fe9d:f156/some/directory/file.html?query=string#fragment",
        parts: {
            protocol: 'http',
            username: 'user',
            password: 'pass',
            host: 'fe80:0000:0000:0000:0204:61ff:fe9d:f156',
            port: undefined,
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        convinience: {
            isRelative: false,
            // host
            authority: 'user:pass@fe80:0000:0000:0000:0204:61ff:fe9d:f156',
            domain: undefined,
            tld: undefined,
            hostIsName: false,
            hostIsIp: true,
            hostIsIp4: false,
            hostIsIp6: true,
            hostIsIdn: false,
            // path
            pathDirectory: '/some/directory',
            pathFilename: 'file.html',
            pathSuffix: 'html',
            // window.location compatibility
            hash: '#fragment',
            search: '?query=string',
            host: 'fe80:0000:0000:0000:0204:61ff:fe9d:f156',
            hostname: 'fe80:0000:0000:0000:0204:61ff:fe9d:f156'
        }
    }, {
        name: "IPv6 with port",
        url: "http://user:pass@[fe80:0000:0000:0000:0204:61ff:fe9d:f156]:123/some/directory/file.html?query=string#fragment",
        parts: {
            protocol: 'http',
            username: 'user',
            password: 'pass',
            host: 'fe80:0000:0000:0000:0204:61ff:fe9d:f156',
            port: 123,
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        convinience: {
            isRelative: false,
            // host
            authority: 'user:pass@[fe80:0000:0000:0000:0204:61ff:fe9d:f156]:123',
            domain: undefined,
            tld: undefined,
            hostIsName: false,
            hostIsIp: true,
            hostIsIp4: false,
            hostIsIp6: true,
            hostIsIdn: false,
            // path
            pathDirectory: '/some/directory',
            pathFilename: 'file.html',
            pathSuffix: 'html',
            // window.location compatibility
            hash: '#fragment',
            search: '?query=string',
            host: '[fe80:0000:0000:0000:0204:61ff:fe9d:f156]:123',
            hostname: 'fe80:0000:0000:0000:0204:61ff:fe9d:f156'
        }
    }
];
