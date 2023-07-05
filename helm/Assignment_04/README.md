1. To create a new chart, by default, nginx is used

```
helm create webserver
```

2. Install tomcat dependency and pass values into it

```yaml
-- Chart.yaml
dependencies:
  - name: tomcat
    version: "^10.x.x"
    repository: "oci://registry-1.docker.io/bitnamicharts"
```

```yaml
-- values.yaml
tomcat:
  service:
    type: NodePort
    nodePorts:
      http: 30007
```

Then:

```
❯ helm dependency update webserver
```

3. To package

```
❯ helm package webserver
Successfully packaged chart and saved it to: Assignment_04/webserver-0.1.0.tgz
```

4. Install chart

```
❯ helm install webserver webserver-0.1.0.tgz
```
