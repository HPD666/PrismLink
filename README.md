# PrismLink 🪐

> An enterprise-grade, post-quantum resilient public utility communication protocol designed for low-latency mesh routing and decentralized data networks.

[![Build Monorepo](https://github.com/HPD666/PrismLink/actions/workflows/deploy.yml/badge.svg)](https://github.com/HPD666/PrismLink/actions)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-ff69b4.svg)](https://pnpm.io/)

---

## 📌 Overview

**PrismLink** is a modular, high-throughput backend communication protocol and mesh engine built to withstand modern and future cryptographic threats. By integrating NIST-standardized **Kyber-1024 post-quantum lattice cryptography** directly into its network abstraction layer, PrismLink enables peer-to-peer (P2P) nodes to execute zero-trust handshakes and route encrypted packet buffers over dynamic mesh topologies.

### Core Architecture

PrismLink is structured as a high-speed **pnpm monorepo** managed with **Turborepo**:

* **`packages/crypto-quantum`**: Implementation of Kyber-1024 Key Encapsulation Mechanisms (KEM) and AES-256-GCM symmetric session encryption.
* **`packages/core-mesh`**: Node identity management, peer discovery state engines, dynamic routing tables, and packet TTL management.
* **`packages/network-adapter`**: Low-latency WebSocket transport layer for bidirectional inter-node socket communication.
* **`apps/protocol-gateway`**: Production application runtime exposing REST management endpoints and running the background socket daemon.

---

## ⚡ Features

* 🛡️ **Quantum-Resilient Encryption**: Native lattice-based cryptography designed to resist quantum-computing attacks.
* 🌐 **Dynamic Mesh Routing**: Hop-by-hop packet forwarding with built-in loop prevention and TTL tracking.
* ⚡ **High-Throughput Transport**: Non-blocking asynchronous WebSocket transport abstraction.
* 📦 **Monorepo Architecture**: Strict TypeScript workspace layout optimized for zero-overhead internal linking.

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed on your host system:
* **Node.js**: `>= 20.0.0`
* **pnpm**: `>= 9.0.0`

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/HPD666/PrismLink.git](https://github.com/HPD666/PrismLink.git)
   cd PrismLink
