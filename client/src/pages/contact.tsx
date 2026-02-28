import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  eventType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const eventTypes = [
  "Conference",
  "Collectors Exhibition",
  "Cultural Event",
  "Wedding",
  "Exhibition",
  "Hybrid Event",
  "Other",
];

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <div className="bg-[#1A1A1A]">
      <Navbar />

      <section className="pt-32 pb-20 relative" data-testid="section-contact-hero">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A2E1F]/30 to-[#1A1A1A]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase mb-4 block">
              Get in Touch
            </span>
            <h1 data-testid="text-contact-title" className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F1E8] mb-6">
              Contact Us
            </h1>
            <p className="text-[#F5F1E8]/60 max-w-2xl mx-auto leading-relaxed">
              Let us help you plan your next extraordinary event. Reach out and our team
              will be in touch.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#222]" data-testid="section-contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-[#1A1A1A] border border-[#C6A75E]/10 rounded-md p-8 md:p-10">
                <h2 className="font-serif text-2xl text-[#F5F1E8] mb-8">Send Us a Message</h2>

                {mutation.isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                    data-testid="text-success-message"
                  >
                    <CheckCircle size={48} className="text-[#C6A75E] mx-auto mb-4" />
                    <h3 className="font-serif text-xl text-[#F5F1E8] mb-2">Message Sent!</h3>
                    <p className="text-[#F5F1E8]/60 mb-6">
                      Thank you for reaching out. Our team will get back to you shortly.
                    </p>
                    <button
                      data-testid="button-send-another"
                      onClick={() => mutation.reset()}
                      className="text-[#C6A75E] text-sm tracking-wider uppercase hover:underline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#F5F1E8]/70 text-sm tracking-wider uppercase">
                                Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="input-name"
                                  placeholder="Your full name"
                                  className="bg-[#222] border-[#C6A75E]/20 text-[#F5F1E8] placeholder:text-[#F5F1E8]/30 focus:border-[#C6A75E]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#F5F1E8]/70 text-sm tracking-wider uppercase">
                                Email
                              </FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="input-email"
                                  type="email"
                                  placeholder="your@email.com"
                                  className="bg-[#222] border-[#C6A75E]/20 text-[#F5F1E8] placeholder:text-[#F5F1E8]/30 focus:border-[#C6A75E]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#F5F1E8]/70 text-sm tracking-wider uppercase">
                                Phone
                              </FormLabel>
                              <FormControl>
                                <Input
                                  data-testid="input-phone"
                                  placeholder="+966 XX XXX XXXX"
                                  className="bg-[#222] border-[#C6A75E]/20 text-[#F5F1E8] placeholder:text-[#F5F1E8]/30 focus:border-[#C6A75E]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="eventType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[#F5F1E8]/70 text-sm tracking-wider uppercase">
                                Event Type
                              </FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger
                                    data-testid="select-event-type"
                                    className="bg-[#222] border-[#C6A75E]/20 text-[#F5F1E8]"
                                  >
                                    <SelectValue placeholder="Select event type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-[#222] border-[#C6A75E]/20">
                                  {eventTypes.map((type) => (
                                    <SelectItem key={type} value={type} className="text-[#F5F1E8]">
                                      {type}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#F5F1E8]/70 text-sm tracking-wider uppercase">
                              Message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                data-testid="input-message"
                                placeholder="Tell us about your event vision..."
                                rows={5}
                                className="bg-[#222] border-[#C6A75E]/20 text-[#F5F1E8] placeholder:text-[#F5F1E8]/30 focus:border-[#C6A75E] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        data-testid="button-submit"
                        disabled={mutation.isPending}
                        className="w-full bg-[#C6A75E] text-[#1A1A1A] tracking-wider uppercase font-medium"
                      >
                        {mutation.isPending ? (
                          "Sending..."
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message <Send size={16} />
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl text-[#F5F1E8] mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <a
                      href="mailto:info@dunesgate.com"
                      data-testid="link-contact-email"
                      className="flex items-center gap-4 text-[#F5F1E8]/70 hover:text-[#C6A75E] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full border border-[#C6A75E]/30 flex items-center justify-center flex-shrink-0">
                        <Mail size={16} className="text-[#C6A75E]" />
                      </div>
                      <span className="text-sm">info@dunesgate.com</span>
                    </a>
                    <div className="flex items-center gap-4 text-[#F5F1E8]/70">
                      <div className="w-10 h-10 rounded-full border border-[#C6A75E]/30 flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-[#C6A75E]" />
                      </div>
                      <span className="text-sm">Riyadh, Saudi Arabia</span>
                    </div>
                    <div className="flex items-center gap-4 text-[#F5F1E8]/70">
                      <div className="w-10 h-10 rounded-full border border-[#C6A75E]/30 flex items-center justify-center flex-shrink-0">
                        <Phone size={16} className="text-[#C6A75E]" />
                      </div>
                      <span className="text-sm">Available upon request</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#C6A75E]/10 pt-8">
                  <h3 className="font-serif text-xl text-[#F5F1E8] mb-6">Connect With Us</h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="link-contact-whatsapp"
                      className="flex items-center gap-4 text-[#F5F1E8]/70 hover:text-[#C6A75E] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full border border-[#C6A75E]/30 flex items-center justify-center flex-shrink-0">
                        <SiWhatsapp size={16} className="text-[#C6A75E]" />
                      </div>
                      <span className="text-sm">WhatsApp</span>
                    </a>
                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="link-contact-instagram"
                      className="flex items-center gap-4 text-[#F5F1E8]/70 hover:text-[#C6A75E] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full border border-[#C6A75E]/30 flex items-center justify-center flex-shrink-0">
                        <SiInstagram size={16} className="text-[#C6A75E]" />
                      </div>
                      <span className="text-sm">Instagram</span>
                    </a>
                    <a
                      href="mailto:info@dunesgate.com"
                      data-testid="link-contact-mail-icon"
                      className="flex items-center gap-4 text-[#F5F1E8]/70 hover:text-[#C6A75E] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full border border-[#C6A75E]/30 flex items-center justify-center flex-shrink-0">
                        <Mail size={16} className="text-[#C6A75E]" />
                      </div>
                      <span className="text-sm">Email Us</span>
                    </a>
                  </div>
                </div>

                <div className="bg-[#1A1A1A] border border-[#C6A75E]/10 rounded-md p-6 mt-8">
                  <p className="text-[#F5F1E8]/50 text-sm leading-relaxed">
                    Have specific requirements or questions about hosting an event at Dunes Gate?
                    Our dedicated team is here to assist you every step of the way. We look forward
                    to hearing from you.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
