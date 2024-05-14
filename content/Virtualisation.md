---
Author:
  - zjevt-me
Author Profile:
  - https://github.com/shrimptqm/shrimptqm-asset/blob/main/image_1713409810036_0.png
tags:
  - OS
  - docker
Creation Date: 2024-03-06, 14:20
Last Date: 2024-03-06T14:33:18+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Virtualization is a technology that allows you to create multiple simulated, or "virtual," computer environments on a single physical machine


## Virtualisation Tools



### Vagrant
- A piece of software to manage VMs with ease
</br>

1. [Install VirtualBox](https://www.virtualbox.org/wiki/Downloads)
2. Install Vagrant
```bash
brew tap hashicorp/tap
brew install hashicorp/tap/hashicorp-vagrant
vagrant plugin install vagrant-share
```


### QEMU
- Powerful open-source machine **emulator** and **virtualizer**
```bash
brew install qemu
```