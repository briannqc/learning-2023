1. Generate keys: `gpg --quick-generate-key "Helm Learner"`
2. Export secret keys: `gpg --export-secret-keys >~/.gnupg/secring.gpg`
3. Package with sign: `helm package --sign --key 'Helm Learner' --keyring ~/.gnupg/secring.gpg firstchart`
4. Verify: `helm verify firstchart-0.1.0.tgz --keyring  ~/.gnupg/secring.gpg`
5. Install: `helm install --verify --keyring  ~/.gnupg/secring.gpg firstrelease firstchart-0.1.0.tgz`