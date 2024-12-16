---
title: Llama3 is out!
date: 2024-04-25
---

Meta have released a new version of their large language model, Llama3, https://ai.meta.com/blog/meta-llama-3/.

Thanks to ollama, the model can easily be tested locally, see https://ollama.com/library/llama3

<!-- truncate -->

Simply pull the model, run `ollama` and start using it with Arc!

```bash
ollama pull llama3:8b
ollama serve
```

Now llama3:8b is ready to use with Arc and the ollama client.
We recommend using the 8B variant locally, as it "only" requires 8GB of RAM.
