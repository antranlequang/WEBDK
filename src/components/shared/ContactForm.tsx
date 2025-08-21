'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { z } from 'zod';
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from '@/app/actions';
import { ContactFormSchema, type ContactFormState } from '@/lib/definitions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const initialState: ContactFormState = null;

export function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitContactForm, initialState);

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state?.message) {
      if (state.issues) {
        toast({
          title: "Lỗi",
          description: state.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Thành công!",
          description: state.message,
        });
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và tên</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                <FormLabel>Địa chỉ email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
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
              <FormLabel>Tin nhắn</FormLabel>
              <FormControl>
                <Textarea placeholder="Tin nhắn của bạn..." {...field} rows={4} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
            <Button type="submit" disabled={form.formState.isSubmitting}>
              Gửi tin nhắn
            </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
            Lưu ý: Biểu mẫu này là một bản trình diễn. Tích hợp backend (ví dụ: với Google Sheets) cần được quản trị viên trang web định cấu hình.
        </p>
      </form>
    </Form>
  );
}
