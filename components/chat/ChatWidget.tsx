"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME: Message = {
  role: "assistant",
  content: "Hello! I'm ARKA Assistant 👋 I can help you with account opening, trading conditions, platform questions and more. How can I help you today?\n\n¡Hola! También puedo ayudarte en español.",
};

export default function ChatWidget() {
  const [open, setOpen]       = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput]     = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef             = useRef<HTMLDivElement>(null);
  const inputRef              = useRef<HTMLInputElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.filter(m => m.role !== "assistant" || m !== WELCOME) }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, {
        role: "assistant",
        content: data.reply ?? data.error ?? "Something went wrong. Please try again.",
      }]);
    } catch {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Connection error. Please try again or email support@arkaltd.io.",
      }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-5 z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          style={{
            width: "360px",
            height: "520px",
            background: "#0D1118",
            border: "1px solid rgba(0,186,179,0.2)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,186,179,0.08)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ background: "#080B10", borderBottom: "1px solid rgba(0,186,179,0.15)" }}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(0,186,179,0.15)", border: "1px solid rgba(0,186,179,0.3)" }}>
                <Bot size={15} style={{ color: "#00BAB3" }} />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">ARKA Assistant</p>
                <p className="text-[11px] mt-0.5 flex items-center gap-1" style={{ color: "#00BAB3" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-white/10">
              <X size={14} className="text-gray-400" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(0,186,179,0.2) transparent" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 mr-2"
                    style={{ background: "rgba(0,186,179,0.15)", border: "1px solid rgba(0,186,179,0.25)" }}>
                    <Bot size={11} style={{ color: "#00BAB3" }} />
                  </div>
                )}
                <div
                  className="max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed"
                  style={msg.role === "user" ? {
                    background: "#00BAB3",
                    color: "#080B10",
                    borderBottomRightRadius: "4px",
                    fontWeight: 500,
                    whiteSpace: "pre-wrap",
                  } : {
                    background: "rgba(255,255,255,0.05)",
                    color: "#E8EDF3",
                    borderBottomLeftRadius: "4px",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {msg.role === "user" ? msg.content : (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                        strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                        em: ({ children }) => <em className="italic">{children}</em>,
                        ol: ({ children }) => <ol className="list-decimal list-outside ml-4 mb-2 space-y-1">{children}</ol>,
                        ul: ({ children }) => <ul className="list-disc list-outside ml-4 mb-2 space-y-1">{children}</ul>,
                        li: ({ children }) => <li className="text-sm leading-relaxed">{children}</li>,
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                            style={{ color: "#00BAB3" }}
                          >
                            {children}
                          </a>
                        ),
                        code: ({ children }) => (
                          <code className="px-1 py-0.5 rounded text-xs font-mono"
                            style={{ background: "rgba(0,186,179,0.12)", color: "#00BAB3" }}>
                            {children}
                          </code>
                        ),
                        hr: () => <hr className="my-2 border-white/10" />,
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 mr-2"
                  style={{ background: "rgba(0,186,179,0.15)", border: "1px solid rgba(0,186,179,0.25)" }}>
                  <Bot size={11} style={{ color: "#00BAB3" }} />
                </div>
                <div className="rounded-2xl px-4 py-3 flex items-center gap-1"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {[0,1,2].map(i => (
                    <span key={i} className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: "#00BAB3",
                        animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick suggestions (only at start) */}
          {messages.length === 1 && !loading && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0">
              {[
                "How do I open an account?",
                "What are the spreads?",
                "What is the minimum deposit?",
              ].map(q => (
                <button key={q} onClick={() => { setInput(q); setTimeout(send, 0); }}
                  className="text-[11px] px-2.5 py-1 rounded-full transition-colors"
                  style={{
                    border: "1px solid rgba(0,186,179,0.25)",
                    color: "#00BAB3",
                    background: "rgba(0,186,179,0.06)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,186,179,0.14)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,186,179,0.06)")}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 pb-3 pt-2 shrink-0"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-2 rounded-xl px-3 py-2"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything…"
                disabled={loading}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-600 text-white disabled:opacity-50"
              />
              <button
                onClick={send}
                disabled={!input.trim() || loading}
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
                style={{ background: "#00BAB3" }}
              >
                {loading
                  ? <Loader2 size={13} className="text-black animate-spin" />
                  : <Send size={13} className="text-black" />}
              </button>
            </div>
            <p className="text-center text-[10px] mt-1.5" style={{ color: "rgba(139,155,174,0.5)" }}>
              ARKA Assistant · Powered by AI
            </p>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          background: open ? "#080B10" : "#00BAB3",
          border: open ? "1px solid rgba(0,186,179,0.4)" : "none",
          boxShadow: "0 8px 32px rgba(0,186,179,0.35)",
        }}
        aria-label="Open chat"
      >
        {open
          ? <X size={22} style={{ color: "#00BAB3" }} />
          : <MessageCircle size={24} className="text-black" />}
      </button>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}
