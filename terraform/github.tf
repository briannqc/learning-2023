terraform {
  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
  }
}

provider "github" {
  # Or via GITHUB_TOKEN
  token = "Token from Settings / Developer Settings"
}

resource "github_repository" "my-first-repo-via-tf" {
  name        = "my-tf-repo"
  description = "My first GitHub repo created via Terraform"
  visibility  = "public"
}
