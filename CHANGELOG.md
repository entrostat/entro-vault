# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.1.0](https://github.com/entrostat/entro-vault/compare/v1.0.2...v1.1.0) (2023-01-01)


### Features

* **wait:** Added the ability to wait for the port to open and then continue, this is cool for CI/CD pipelines ([bb0ea6d](https://github.com/entrostat/entro-vault/commit/bb0ea6d5fbd18a413442f216c45e1f8cf2231973))


### Bug Fixes

* **deps:** bump @oclif/plugin-help from 5.1.19 to 5.1.20 ([acf8381](https://github.com/entrostat/entro-vault/commit/acf8381f2b98ed79800bb4c82758be9d7fdd6bf2))
* **devops:** Updated the version of entro-version ([86a74d1](https://github.com/entrostat/entro-vault/commit/86a74d12514eb02ba15f62c0dddc6b44935c55ff))

### [1.0.2](https://github.com/entrostat/entro-vault/compare/v1.0.1...v1.0.2) (2022-12-04)


### Bug Fixes

* **upload:** Changed the flag to secret-path but didn't use that in the code ([c8957c7](https://github.com/entrostat/entro-vault/commit/c8957c757e06dfbf18486e8f7a2d933f3d6ed12c))

### [1.0.1](https://github.com/entrostat/entro-vault/compare/v1.0.0...v1.0.1) (2022-12-04)


### Bug Fixes

* **devops:** Removed all of the workflows for Github ([df03806](https://github.com/entrostat/entro-vault/commit/df03806fc88cecab558c94a76aba39bf0d7c669b))

## 1.0.0 (2022-12-04)


### Features

* **commands:** Added the ability to disconnect from the ssh command ([dd8fa51](https://github.com/entrostat/entro-vault/commit/dd8fa51b95576a0cfc7173c19a7c3af6e7bf79b3))
* **commands:** Added the ability to download an env file to your machine ([639f477](https://github.com/entrostat/entro-vault/commit/639f477cdd3d071e2d11be124187154e227bc838))
* **commands:** Added the ability to reverse tunnel the Vault port via CLI ([2f12f29](https://github.com/entrostat/entro-vault/commit/2f12f29f6b99385da1d807984c878bc2f0809832))
* **commands:** Added the ability to upload env files ([e2956cf](https://github.com/entrostat/entro-vault/commit/e2956cf4dfba3d38ae4318f0f15103fdaca24106))
* **devops:** Added the entro-version release scripts ([de94fe0](https://github.com/entrostat/entro-vault/commit/de94fe0860a2746b79a49ff5d521204c9cd6f9aa))
