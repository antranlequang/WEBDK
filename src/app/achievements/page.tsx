import Image from 'next/image';
import { PageBanner } from '@/components/shared/PageBanner';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function AchievementsPage() {
  const achievements = [
    {
      title: 'Giấy khen tập thể Đoàn khoa Tài chính - Ngân hàng Đoàn Trường ĐH Kinh tế - Luật "Đã có thành tích xuất sắc trong Công tác Đoàn và phong trào thanh niên ĐHQG-HCM năm học 2020 - 2021" của Ban Cán sự Đoàn ĐHQG-HCM',
      // description: 'Được công nhận vì đã quyên góp được số tiền cao nhất cho hoạt động từ thiện hàng năm của trường đại học.',
      imageUrl: 'https://placehold.co/400x300.png',
      imageHint: 'group award',
    },
    {
      title: 'Giấy khen tập thể Đoàn khoa Tài chính - Ngân hàng Đoàn Trường ĐH Kinh tế - Luật "Đã có đóng góp tích cực trong Công tác Đoàn và phong trào thanh niên ĐHQG-HCM" giai đoạn 2019 - 2022 của Ban Cán sự Đoàn ĐHQG-HCM',
      // description: 'Được vinh danh cho chuỗi hội thảo và dạy kèm của chúng tôi đã cải thiện đáng kể điểm số của sinh viên.',
      imageUrl: 'https://placehold.co/400x300.png',
      imageHint: 'certificate presentation',
    },
    {
      title: 'Bằng khen Đoàn khoa Tài chính - Ngân hàng Đoàn Trường ĐH Kinh tế - Luật về Thực hiện tốt Chương trình hành động số 15-CT/TĐTN-BTG ngày 11/8/2016 của BCH Thành Đoàn về thực hiện Chỉ thị số 42-CT/TW của BBT TW Đảng về “Tăng cường sự lãnh đạo của Đảng đối với công tác giáo dục lý tưởng cách mạng, đạo đức, lối sống văn hóa cho thế hệ trẻ giai đoạn 2015 - 2030" của BTV Thành đoàn TP. HCM.',
      // description: 'Được trao giải cho các sáng kiến tình nguyện thành công và quan hệ đối tác bền chặt của chúng tôi với các doanh nghiệp địa phương.',
      imageUrl: 'https://placehold.co/400x300.png',
      imageHint: 'community volunteering',
    },
  ];

  return (
    <div>
      <PageBanner
        title="Thành tích chúng tớ đạt được"
        subtitle="Tốt khoe xấu che, nhưng thành tích thì phải khoe!"
        imageUrl="/images/back-ocean.jpg"
        imageHint="trophies awards"
        className="brightness-150"
      />

      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group">
              <CardContent className="p-0">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <Image
                    src={achievement.imageUrl}
                    alt={achievement.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={achievement.imageHint}
                  />
                </div>
              </CardContent>
              <CardFooter className="p-6 flex-grow flex flex-col justify-start text-center bg-background">
              <h3 className="font-headline text-lg font-semibold text-primary text-justify">{achievement.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground text-justify"></p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
