data "aws_ami" "app_ami" {
    most_recent = true
    owners = [ "amazon" ]

    filter {
      name = "name"
      values = [ "amzn2-ami-hvm*" ]
    }
}

output "latest_ami_in_region" {
  value = data.aws_ami.app_ami.id
}
