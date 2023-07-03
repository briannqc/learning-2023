1. Install bitnami/tomcat

    ```
    ❯ helm repo add bitnami https://charts.bitnami.com/bitnami
    "bitnami" has been added to your repositories

    ❯ helm install tomcat bitnami/tomcat
    ```

2. Get password

    ```
    ❯ echo Password: $(kubectl get secret --namespace default tomcat -o jsonpath="{.data.tomcat-password}" | base64 -d)
    Password: yLiWA34ryq
    ```

3. Upgrade

    values.yaml

    ```yaml
    tomcatPassword: yLiWA34ryq
    service:
    type: NodePort
    notePorts:
        http: 30007
    ```

    ```
    ❯ helm upgrade tomcat bitnami/tomcat --values Assignment_01/values.yaml
    Release "tomcat" has been upgraded. Happy Helming!
    ```
    
4. Uninstall

    ```
    ❯ helm uninstall tomcat
    release "tomcat" uninstalled
    ```
