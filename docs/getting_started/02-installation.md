---
title: Installation
description: Install LMOS in your Kubernetes cluster
---

## Prerequisites

Before installing the lmos-operator, ensure the following prerequisites are met:

1. A working Kubernetes cluster is set up.
2. `kubectl` is installed and configured to communicate with your cluster.
3. `helm` is installed. You can download and install Helm from the official [Helm website](https://helm.sh/docs/intro/install/).

## Installation

Follow these steps to install the lmos-operator in your Kubernetes cluster:

1. Update the Helm repositories:

   ```bash
   helm repo update
   ```

2. Install or upgrade the lmos-operator using the following command:

   ```bash
   helm upgrade --install lmos-operator oci://ghcr.io/eclipse-lmos/lmos-operator-chart --version 0.4.0
   ```

   This command installs version `0.4.0` of the lmos-operator from the OCI registry path `ghcr.io/eclipse-lmos`.

3. Verify that the lmos-operator was successfully installed:

   ```bash
   kubectl get pods -n <namespace>
   ```

   Replace `<namespace>` with the namespace where the lmos-operator was installed (default is often `default` if no namespace was specified).

4. Check the operator logs to ensure it is functioning correctly:

   ```bash
   kubectl logs -l app=lmos-operator -n <namespace>
   ```

   Replace `<namespace>` with the appropriate namespace.

5. Wait for the LMOS agent CRD to be created:

   ```bash
   kubectl get crd agents.lmos.eclipse
   ```

6. Install the arc-view chart:

   ```bash
   helm upgrade --install arc-view-web oci://ghcr.io/eclipse-lmos/arc-view-web-chart --version 0.1.0
   ```

   This command installs version `0.1.0` of the arc-view`.

