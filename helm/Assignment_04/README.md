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
❯ helm install webserver webserver
```
