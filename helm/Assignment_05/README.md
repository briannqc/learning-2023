```sh
# Package chart to local repo
helm package Assignment_04/webserver -d local-repo  

# Push to OCI
helm push local-repo/webserver-0.1.0.tgz oci://localhost:5001
```