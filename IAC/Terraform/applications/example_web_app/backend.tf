terraform {
  backend "s3" {
    encrypt              = true
    region               = "ap-southeast-2"
    bucket               = "bypassq-terraform-state"
    workspace_key_prefix = "bypassq"
    key                  = "terraform.tfstate"
    dynamodb_table       = "bypassq-terraform-state-locking" 
    profile              = "default"
  }
}
