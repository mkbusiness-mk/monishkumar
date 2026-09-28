from pptx import Presentation
from pptx.util import Inches, Pt

prs = Presentation()

# Slide 1: Title
slide_layout_title = prs.slide_layouts[0]
slide1 = prs.slides.add_slide(slide_layout_title)
title1 = slide1.shapes.title
subtitle1 = slide1.placeholders[1]
title1.text = "Demystifying LLM Fine-Tuning"
subtitle1.text = "Unlocking Domain-Specific Intelligence in Large Language Models"

# Slide Data
slides = [
    {
        "title": "2. What is an LLM?",
        "bullets": [
            "Large Language Model (LLM): Deep learning AI trained on vast amounts of text data.",
            "Core Function: Predicts the next word (token) in sequence.",
            "Pre-training Phase: Requires massive compute and data to learn grammar, facts, and reasoning.",
            "Examples: Base models like GPT-4, Llama 3, or Claude 3."
        ]
    },
    {
        "title": "3. What is Fine-Tuning?",
        "bullets": [
            "Definition: Taking a pre-trained LLM and training it further on a smaller, specialized dataset.",
            "Analogy:\n  - Pre-training = Broad college degree.\n  - Fine-tuning = On-the-job training.",
            "Goal: Shifts model from 'general text completer' to a 'domain expert' or 'useful assistant.'"
        ]
    },
    {
        "title": "4. Why Fine-Tune?",
        "bullets": [
            "Domain Adaptation: Teach the model company jargon, medical terms, or legal nuances.",
            "Task Specialization: Improve performance on specific tasks (summarization, coding, JSON extraction).",
            "Tone and Style: Align the voice with a brand personality.",
            "Cost & Latency: A fine-tuned smaller model can often outperform a larger, more expensive base model."
        ]
    },
    {
        "title": "5. Full Fine-Tuning vs. PEFT",
        "bullets": [
            "Full Fine-Tuning:\n  - Updates ALL weights in the neural network.\n  - Extremely expensive (compute + memory).\n  - Prone to 'catastrophic forgetting'.",
            "PEFT (Parameter-Efficient Fine-Tuning):\n  - Only updates a small subset of parameters.\n  - Drastically reduces memory and compute costs."
        ]
    },
    {
        "title": "6. Deep Dive into LoRA",
        "bullets": [
            "LoRA (Low-Rank Adaptation): The most popular PEFT method.",
            "How it works: Freezes original model, injects training through small, low-rank matrices.",
            "Benefits:\n  - Trains 10,000x fewer parameters.\n  - Can run on a single consumer GPU.\n  - Adapters can be swapped modularly for different tasks."
        ]
    },
    {
        "title": "7. Instruction Fine-Tuning",
        "bullets": [
            "Base vs Instruction:\n  - Base models just continue text.\n  - Instruction Tuning trains on (Prompt, Response) pairs.",
            "Mechanism: Teaches the model to act as a chatbot, follow user commands, answer questions, and format outputs.",
            "Importance: A crucial step for creating interactive assistants like ChatGPT."
        ]
    },
    {
        "title": "8. Alignment (RLHF & DPO)",
        "bullets": [
            "Output Alignment: Ensuring models are Helpful, Honest, and Harmless.",
            "RLHF (Reinforcement Learning from Human Feedback):\n  - Humans rank answers -> Trains a Reward Model -> Updates LLM.",
            "DPO (Direct Preference Optimization):\n  - Newer, simpler method optimizing LLM directly on preference data (skips reward model)."
        ]
    },
    {
        "title": "9. The Fine-Tuning Pipeline",
        "bullets": [
            "1. Data Collection: Gather high-quality, task-specific data.",
            "2. Formatting: Prepare in prompt-completion pairs (JSONL).",
            "3. Training: Use frameworks (Hugging Face, Unsloth) for LoRA.",
            "4. Evaluation: Test on holdout data and benchmarks (MMLU).",
            "5. Deployment: Merge adapter weights with the base model and host."
        ]
    },
    {
        "title": "10. Challenges & Conclusion",
        "bullets": [
            "Challenges:\n  - High-quality data curation is difficult and manual.\n  - Hallucinations can still persist.\n  - Risk of catastrophic forgetting if pushed too far.",
            "Conclusion: Fine-tuning bridges the gap between generic AI and enterprise solutions. Techniques like LoRA have democratized this."
        ]
    }
]

slide_layout_content = prs.slide_layouts[1]

for slide_data in slides:
    slide = prs.slides.add_slide(slide_layout_content)
    title = slide.shapes.title
    title.text = slide_data["title"]
    
    body_shape = slide.placeholders[1]
    tf = body_shape.text_frame
    
    first_bullet = True
    for bullet in slide_data["bullets"]:
        if "\n" in bullet:
            parts = bullet.split("\n")
            if first_bullet:
                tf.text = parts[0]
                first_bullet = False
            else:
                p = tf.add_paragraph()
                p.text = parts[0]
                p.level = 0
                
            for sub_part in parts[1:]:
                sub_p = tf.add_paragraph()
                sub_p.text = sub_part.strip(" -")
                sub_p.level = 1
        else:
            if first_bullet:
                tf.text = bullet
                first_bullet = False
            else:
                p = tf.add_paragraph()
                p.text = bullet
                p.level = 0

prs.save("LLM_Fine_Tuning.pptx")
