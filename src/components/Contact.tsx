import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Send, CheckCircle2, User, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [hasEmailError, setHasEmailError] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasEmailError(false);

    // Custom Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setHasEmailError(true);
      return;
    }

    setStatus("submitting");
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/6d5db49cc754fac8dc7378e2478d6c69", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: "Nuevo Contacto desde el Portfolio!",
            _template: "table"
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("idle");
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      setStatus("idle");
      alert("Network error. Please try sending via direct email.");
    }
  };

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-white mt-16 min-h-[70vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full space-y-8"
      >
        <div>
          <span className="text-secondary font-display text-xs uppercase tracking-[0.3em] font-medium block mb-4">
            {t("contact.subtitle")}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-white tracking-tighter mb-8 block">
            {t("contact.title").split(" ")[0]} <span className="text-secondary italic">{t("contact.title").split(" ").slice(1).join(" ")}</span>
          </h2>
        </div>

        <div className="glass p-8 group relative border-t-2 border-t-secondary transition-colors duration-500 overflow-hidden">
          <form onSubmit={handleSubmit} noValidate className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-display uppercase tracking-widest text-primary/70 font-semibold flex items-center gap-2">
                  <User size={14} className="text-secondary" /> {t("contact.name_label")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t("contact.name_placeholder")}
                  className="w-full bg-background/50 border border-white/10 rounded-none p-4 text-sm text-white focus:outline-none focus:border-secondary transition-colors placeholder:text-[#484849]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-display uppercase tracking-widest text-primary/70 font-semibold flex items-center gap-2">
                  <Mail size={14} className="text-primary" /> {t("contact.email_label")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    setHasEmailError(false);
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  placeholder={t("contact.email_placeholder")}
                  className={`w-full bg-background/50 border rounded-none p-4 text-sm text-white focus:outline-none transition-colors placeholder:text-[#484849] ${
                    hasEmailError ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-primary"
                  }`}
                />
                {hasEmailError && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[10px] font-display uppercase tracking-widest text-red-400 mt-2 flex items-center gap-2"
                  >
                    ! {t("contact.invalid_email")}
                  </motion.p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-display uppercase tracking-widest text-primary/70 font-semibold flex items-center gap-2">
                <MessageSquare size={14} className="text-tertiary" /> {t("contact.message_label")}
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t("contact.message_placeholder")}
                rows={5}
                className="w-full bg-background/50 border border-white/10 rounded-none p-4 text-sm text-white focus:outline-none focus:border-tertiary transition-colors placeholder:text-[#484849] resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full bg-white/5 border border-secondary text-secondary font-display text-sm tracking-widest p-4 uppercase hover:bg-secondary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 backdrop-blur-sm relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-secondary/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 pointer-events-none" />
              
              {status === "idle" && (
                <>
                  <span className="relative z-10">{t("contact.submit")}</span>
                  <Send size={16} className="relative z-10" />
                </>
              )}
              {status === "submitting" && (
                <span className="relative z-10 animate-pulse">{t("contact.submitting")}</span>
              )}
              {status === "success" && (
                <>
                  <span className="relative z-10 text-white">{t("contact.success")}</span>
                  <CheckCircle2 size={16} className="text-white relative z-10" />
                </>
              )}
            </button>
          </form>

          <div className="absolute top-8 right-8 p-3 opacity-[0.03] pointer-events-none -rotate-12 scale-110">
            <Mail size={180} className="text-white" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
