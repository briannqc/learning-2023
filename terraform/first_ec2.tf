provider "aws" {
  // Use environment variables
  // Refer: https://registry.terraform.io/providers/hashicorp/aws/latest/docs
}

// https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance
resource "aws_instance" "my-first-ec2" {
  ami = "ami-0aeea5e3528304b0d"
  instance_type = "t2.micro"

  tags = {
    Name = "my-first-ec2"
  }
}