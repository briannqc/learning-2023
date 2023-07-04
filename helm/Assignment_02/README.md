1. Install bitnami/tomcat using generated name

```
❯ helm install bitnami/tomcat --generate-name
```

2. Dry-run

```
❯ helm install bitnami/tomcat --generate-name --dry-run
```

3. Generate template

```
❯ helm template bitnami/tomcat --generate-name
```

4. Get Release Notes

```
❯ helm get notes tomcat-1688429397
```

5. Get release records

```
❯ kgsec
NAME                                      TYPE                 DATA   AGE
sh.helm.release.v1.tomcat-1688429397.v1   helm.sh/release.v1   1      3m2s
tomcat-1688429397                         Opaque               1      3m2s
```
