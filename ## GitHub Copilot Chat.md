## GitHub Copilot Chat

- Extension Version: 0.22.4 (prod)
- VS Code: vscode/1.95.3
- OS: Mac

## Network

User Settings:

```json
  "github.copilot.advanced": {
    "debug.useElectronFetcher": true,
    "debug.useNodeFetcher": false
  }
```

Connecting to https://api.github.com:

- DNS ipv4 Lookup: 140.82.112.5 (45 ms)
- DNS ipv6 Lookup: ::ffff:140.82.112.5 (8 ms)
- Electron Fetcher (configured): HTTP 200 (140 ms)
- Node Fetcher: HTTP 200 (122 ms)
- Helix Fetcher: HTTP 200 (339 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:

- DNS ipv4 Lookup: 140.82.112.22 (14 ms)
- DNS ipv6 Lookup: ::ffff:140.82.112.22 (14 ms)
- Electron Fetcher (configured): HTTP 200 (115 ms)
- Node Fetcher: HTTP 200 (105 ms)
- Helix Fetcher: HTTP 200 (101 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).
