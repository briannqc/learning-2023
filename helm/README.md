## Section 8: Repositories

### Set up a local repo

- Init a repo in `local-repo` directory: `helm repo index local-repo`
- Package helm chart to a repo: `helm package my-chart -d local-repo`, re-index: `helm repo index local-repo`

### Host the repository on a web server

#### HTTP

We can use any web server such as nginx, github pages, or a blob storage which supports HTTP such as S3 to host the repository.
To host a server with python.

```sh
❯ cd local-repo
❯ python3 -m http.server --bind 127.0.0.1 8080
Serving HTTP on 127.0.0.1 port 8080 (http://127.0.0.1:8080/) ...

# Add local-repo to helm
❯ helm repo add localrepo http://127.0.0.1:8080
"localrepo" has been added to your repositories

❯ helm repo list
NAME            URL                               
bitnami         https://charts.bitnami.com/bitnami
localrepo       http://127.0.0.1:8080

❯ helm install webserver localrepo/webserver
NAME: webserver
LAST DEPLOYED: Wed Jul  5 22:27:21 2023
NAMESPACE: default
STATUS: deployed
REVISION: 1

❯ helm list
NAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION
webserver       default         1               2023-07-05 22:27:21.605348 +0800 +08    deployed        webserver-0.1.0 1.16.0     

# We can also pull the *.tgz file and install it
❯ helm pull localrepo/webserver
❯ helm install webserver webserver-0.1.0.tgz
```

To update repo indexes, run: `helm repo update`

#### OCI

HTTP repo has some limitations, e.g.

- No namespace, all the charts appear in the same `index.yaml` file
- No fine-grained access control, whoever can access the repo, can access all the charts
- The same chart can be uploaded under different name

OCI addresses these issues and is enabled by default since 3.8.0.

```sh
❯ docker run -d --name oci-registry -p 5001:5000 registry

❯ helm package firstchart

❯ helm push firstchart-0.1.0.tgz oci://localhost:5001
Pushed: localhost:5001/firstchart:0.1.0
Digest: sha256:8429bae89dab647b51005e646168446e687007c020c22baee5a028e456a52e48

❯ helm show all oci://localhost:5001/firstchart --version 0.1.0

❯ helm pull oci://localhost:5001/firstchart --version 0.1.0
```
