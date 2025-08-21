import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const carouselItems = [
    {
      image: "https://placehold.co/600x400.png",
      hint: "achievement",
      title: "Thành tích",
      description: "Nhấn để tìm hiểu thêm",
      link: "/achievements"
    },
    {
      image: "https://placehold.co/600x400.png",
      hint: "activities",
      title: "Hoạt động",
      description: "Nhấn để tìm hiểu thêm",
      link: "/activities"
    },
    {
      image: "https://placehold.co/600x400.png",
      hint: "structure",
      title: "Cơ cấu",
      description: "Nhấn để tìm hiểu thêm",
      link: "/structure"
    },
    {
      image: "https://placehold.co/600x400.png",
      hint: "blog",
      title: "Blog",
      description: "Nhấn để tìm hiểu thêm",
      link: "/blog"
    },
    {
      image: "https://placehold.co/600x400.png",
      hint: "apply",
      title: "Ứng tuyển",
      description: "Nhấn để tìm hiểu thêm",
      link: "/contact"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="relative w-full flex items-center justify-center text-center text-white">
        <Image
          src="/images/backkipu.png"
          alt="Finance - Banking Faculty Union"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
          data-ai-hint="university campus"
        />
        {/* <div className="absolute inset-0 bg-black/50 z-10" />    */}
        {/* <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative z-20 p-4 text-white">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
            CHÀO MỪNG ĐẾN VỚI 
          </h1>
          <h1 className="text-3xl md:text-6xl font-headline font-extrabold mb-4 drop-shadow-lg">
            ĐOÀN KHOA TÀI CHÍNH - NGÂN HÀNG
          </h1>
          <p className="text-2xl md:text-3xl max-w-30xl mx-auto drop-shadow-md font-semibold italic">
            Nơi trái tim gọi là "Nhà"
          </p>
        </div> */}
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2">
              <Image
                src="/images/doankhoa.jpg"
                alt="Group of students"
                width={700}
                height={500}
                className="rounded-xl shadow-2xl"
                data-ai-hint="students collaborating"
              />
            </div>
            <div className="order-2 md:order-1 space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary">
                <span className="block md:inline">Đoàn khoa</span>{' '}
                <span className="block md:inline">Tài chính - Ngân hàng</span>
              </h2>
              <p className="text-muted-foreground text-lg text-justify">
              Đoàn khoa là tổ chức chính trị - xã hội, đóng vai trò là cầu nối, mang các hoạt động và phong trào thanh niên đến gần hơn với sinh viên. Mục tiêu hoạt động của tổ chức này là lấy lợi ích của sinh viên làm trọng tâm, từ đó tổ chức các chương trình thiết thực, giúp sinh viên phát huy những giá trị tốt đẹp và lan tỏa các phong trào tích cực.
              </p>
              {/* <Button asChild size="lg" className="mt-4">
                <Link href="/structure">Về chúng tớ<ArrowRight className="ml-3 h-10 w-5" /></Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary">TÌM HIỂU VỀ CHÚNG TỚ</h2>
          <p className="text-muted-foreground font-semibold text-2xl md:text-1xl mx-auto mb-12">
            Các hoạt động, sự kiện, thành tích nổi bật của Đoàn Khoa mình nè.
          </p>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Link href={item.link} className="h-full block">
                      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover"
                          data-ai-hint={item.hint}
                        />
                        <CardContent className="p-6 flex-grow flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-headline font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 transform -translate-x-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 transform translate-x-1/2" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
