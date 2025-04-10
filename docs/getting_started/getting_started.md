---
title: Demo guide
description: Setup and test LMOS Kubernetes cluster locally
---

# Demo guide

## Test LMOS locally

The [LMOS Demo](https://github.com/eclipse-lmos/lmos-demo) serves as a starting point for testing LMOS. While we are still in the process of migrating projects to Open Source and adopting Open Standards, the core concepts are already available for testing. <br />
The LMOS Demo launches a container that internally sets up Kubernetes (Minikube), along with Istio, Kiali, Grafana, and Prometheus, into which the LMOS components are installed.

**Prerequisites**:

Before you begin, ensure the following tools are installed and running on your local machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Remote - Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### 1. Open the Repository in a Dev Container

1. Clone the repository:
    ```shell
    git clone https://github.com/eclipse-lmos/lmos-demo.git
    cd lmos-demo
    ```

2. Open the repository in Visual Studio Code:

3. Open the Command Palette (F1 or Ctrl+Shift+P on Windows, Shift+Command+P on Mac) and select `Remote-Containers: Reopen in Container`. This will build and open the repository in a Docker-based development container.
(Please note:
a. If you are unable to find the option 'Remote-Containers: Reopen in Container' in Command Palette then use 'Dev Containers: Rebuild Container'
b. Default memory allocated is 8 gigs, if you are facing any container boot issue related to memory then you may reduce this allocated memory by updating memory parameter available in 'runArgs' in 'devcontainer.json' file)  

### 2. Set OpenAI Connection Details
Once inside the development container, set up the necessary environment variables for OpenAI API access in the `.env` file.
This OpenAPI access is used by the `lmos-runtime` and the agents.

```
OPENAI_APIKEY="<your-openai-api-key>"
OPENAI_MODELNAME="gpt-4o-mini"
OPENAI_URL="https://api.openai.com"
```

### 3. Install LMOS

Run the following commands to install LMOS onto Minikube:

```shell
./install.sh
```

### 4. Check the Setup

To verify the installation of LMOS, run:

```
kubectl get pods
```

Output:

```
NAME                                   READY   STATUS    RESTARTS   AGE
arc-view-runtime-web-db8d87c59-54k7b   2/2     Running   0          87s
lmos-operator-64bfb9b569-4l9qv         2/2     Running   0          2m22s
lmos-runtime-59ffdbdc6f-v5jtr          2/2     Running   0          2m21s
```

The status has to be `2/2 Running` for all three of them.

### 5. Access Kiali and Grafana

To visualize your setup, various ports have been forwarded for LMOS, Kiali, Prometheus and Grafana. You can access these tools at

- Kiali: http://localhost:20001
- Grafana: http://localhost:3000
- Prometheus: http://localhost:9090

The LMOS components can be accessed at:
- Arc View: http://localhost:8080 (Web)
- LMOS Runtime: http://localhost:8081 (API)

### 5. Install a demo

In the `demos` folder, you can find various demo setups.
To install a demo, run the corresponding `install.sh` script, e.g. for the `starter` demo:

```shell
./demos/starter/install.sh
```

## Deploy LMOS on Your Kubernetes Cluster

This guides provides instructions to install `lmos-operator` and `lmos-runtime` on your Kubernetes cluster.

**Prerequisites:**

Before proceeding with the installation, ensure you have the following prerequisites:

- Kubernetes cluster (v1.19 or newer).
- Helm installed (`v3` or newer).
- Access to the OpenAI API.
- The `OPENAI_API_KEY` and `OPENAI_API_URL` values should be available.

### 1. Install lmos-operator

To install `lmos-operator` using Helm, run the following command:

```bash
helm upgrade --install lmos-operator oci://ghcr.io/eclipse-lmos/lmos-operator-chart \
  --version 0.0.4-SNAPSHOT
```

### 2. Create Kubernetes Secret for OpenAI

Next, you need to create a Kubernetes secret that contains your OpenAI API key. Replace "$OPENAI_API_KEY" with your actual OpenAI API key.

```bash
kubectl create secret generic lmos-runtime --from-literal=OPENAI_API_KEY="$OPENAI_API_KEY"
```

### 3. Install lmos-runtime

Now, install `lmos-runtime` using Helm. Replace the environment variables with the appropriate values:

- "$OPENAI_API_URL": Your OpenAI API URL (e.g., https://api.openai.com).
- GPT4o-mini: The desired OpenAI model (in this case, GPT4o-mini).

```bash
helm upgrade --install lmos-runtime oci://ghcr.io/eclipse-lmos/lmos-runtime-chart \
  --version 0.1.0-SNAPSHOT \
  --set openaiApiUrl="$OPENAI_API_URL" \
  --set openaiApiModel=GPT4o-mini \
  --set agentRegistryUrl=http://lmos-operator.default.svc.cluster.local:8080
```

### 4. Verifying Installation
To ensure both components are installed and running correctly, use the following commands to check the status of the pods:

```bash
kubectl get pods
```

You should see both lmos-operator and lmos-runtime pods in a running state.

## Develop Your Own Agent

With ARC, we offer a Kotlin-based framework for developing agents. 
There is an extensive [documentation](/lmos/docs/arc/index) about ARC.

