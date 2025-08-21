import Link from 'next/link';
import { University, Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { ContactForm } from '@/components/shared/ContactForm';

export function Footer() {
  return (
    <footer className="bg-[#2dace5] border-t">
      <div className="container mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* About Section */}
          <div className="order-2 md:order-1">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <span className="font-headline text-xl sm:text-2xl font-bold text-white">
                ĐOÀN KHOA TÀI CHÍNH - NGÂN HÀNG
              </span>
            </Link>
            <p className="text-white mb-2">&quot;Nơi trái tim gọi là Nhà&quot;</p>
            <p className="text-white">
              &copy; {new Date().getFullYear()} Đoàn khoa Tài chính - Ngân hàng, Trường Đại học Kinh tế - Luật, ĐHQG-TPHCM.
            </p>
          </div>

          {/* Contact Section */}
          <div className="order-9 md:order-2 md:pl-12 space-y-2">
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-white">LIÊN HỆ CHÚNG TÔI</h3>
            <div className="flex items-center gap-3">
              <Facebook className="text-white h-5 w-5" />
                <Link href="https://www.facebook.com/tcnh.uel" className="text-white hover:underline text-sm sm:text-sm">
                  Ban Truyền Thông FBMC
                </Link>
            </div>
            <div className=" flex items-center gap-3">
              <Mail className="text-white h-5 w-5" />
              <span className="text-white text-sm sm:text-sm">dktaichinhnganhang@st.uel.edu.vn</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-white h-5 w-5" />
              <span className="text-white text-sm sm:text-sm">669 Đỗ Mười, Phường Linh Xuân, TP. Hồ Chí Minh</span>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-5 border-t pt-2 text-center text-white text-sm">
          <p>For website issue, please contact: tranlequangan2308@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
