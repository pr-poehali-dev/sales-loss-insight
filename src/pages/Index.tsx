import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Свяжемся в течение 1 рабочего дня.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 rounded flex items-center justify-center">
              <Icon name="TrendingUp" size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">
              Диагностика точки роста
            </h1>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('who')} className="text-gray-600 hover:text-blue-900 transition-colors text-sm font-medium">
              Для кого
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-600 hover:text-blue-900 transition-colors text-sm font-medium">
              Процесс
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-blue-900 transition-colors text-sm font-medium">
              Тарифы
            </button>
            <Button onClick={() => scrollToSection('contact')} size="sm" className="bg-blue-900 hover:bg-blue-800 text-white">
              Записаться
            </Button>
          </div>
        </nav>
      </div>

      <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-900 border-0 px-4 py-2 text-sm font-medium">
              Бесплатно для отделов продаж от 5 человек
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Диагностика точки роста продаж
            </h2>
            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto font-medium">
              Узнайте, где ваш бизнес теряет прибыль — и как вырасти до +150%
            </p>
            <p className="text-base text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Индивидуальная встреча с экспертом. Получите оценку потенциала роста оборота и прибыли в рублях, а также конкретные рекомендации.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('contact')} 
                size="lg" 
                className="bg-blue-900 hover:bg-blue-800 text-white text-base px-8 py-6 font-semibold"
              >
                Записаться на диагностику
              </Button>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Icon name="Clock" size={16} />
                <span>60–90 минут в Zoom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="who" className="py-20 px-6 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Для кого эта диагностика
            </h3>
            <p className="text-gray-600">Проверьте, подходит ли вам наша услуга</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: 'Users', 
                title: 'Собственники бизнеса',
                text: 'С отделом продаж от 5 человек'
              },
              { 
                icon: 'TrendingUp', 
                title: 'Стабильные компании',
                text: 'Где продажи идут, но рост замедлился'
              },
              { 
                icon: 'Target', 
                title: 'Амбициозные лидеры',
                text: 'Кто хочет понять, где застряли деньги'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 border-2 border-gray-200 hover:border-blue-900 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded bg-blue-900 flex items-center justify-center mb-6">
                  <Icon name={item.icon as any} size={28} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Процесс диагностики
            </h3>
            <p className="text-gray-600">Четыре этапа работы с экспертом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: 'MessageSquare', title: 'Интервью', desc: 'Изучение компании, рынка, клиентской базы и системы продаж', number: '01' },
              { icon: 'BarChart3', title: 'Анализ', desc: 'Выявление узких мест и точек потерь в процессах продаж', number: '02' },
              { icon: 'Calculator', title: 'Расчёт потенциала', desc: 'Оценка возможного роста оборота и прибыли в рублях', number: '03' },
              { icon: 'Compass', title: 'Рекомендации', desc: 'Конкретный план действий для увеличения выручки', number: '04' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-white border-2 border-gray-200 relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-bold text-gray-100">{item.number}</div>
                    <div className="w-12 h-12 rounded bg-blue-900 flex items-center justify-center -mt-16 relative z-10">
                      <Icon name={item.icon as any} size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="mt-8 p-8 bg-blue-900 border-0">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded bg-white/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Lightbulb" size={28} className="text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-white mb-2">Результат</h4>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Вы получите чёткое понимание, какие действия приведут к росту продаж и прибыли
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Что вы получите
            </h3>
            <p className="text-gray-600">Конкретные материалы после встречи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: 'TrendingUp', title: 'Прогноз роста', desc: 'Расчёт в рублях и процентах' },
              { icon: 'ListChecks', title: 'План действий', desc: 'Конкретные шаги для роста' },
              { icon: 'FileText', title: 'Заключение эксперта', desc: 'Зоны потерь и точки влияния' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 border-2 border-gray-200">
                <div className="w-14 h-14 rounded bg-blue-50 flex items-center justify-center mb-6">
                  <Icon name={item.icon as any} size={28} className="text-blue-900" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
          <Card className="p-10 bg-blue-50 border-2 border-blue-200">
            <p className="text-center text-xl font-semibold text-gray-900">
              Ясная картина: где вы теряете деньги и как превратить это в рост
            </p>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Бонусные материалы
            </h3>
            <p className="text-gray-600">Практические инструменты в подарок</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'ClipboardCheck', title: 'Чек-лист проверки РОПа' },
              { icon: 'ClipboardList', title: 'Чек-лист проверки МОПа' },
              { icon: 'Calendar', title: 'План РОПа на 90 дней' },
              { icon: 'Calculator', title: 'Калькулятор роста (Excel)' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 bg-white border-2 border-gray-200 text-center hover:border-blue-900 transition-all">
                <div className="w-12 h-12 rounded bg-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} size={24} className="text-white" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Эксперты-практики
            </h3>
          </div>
          <Card className="p-10 border-2 border-gray-200">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-20 h-20 bg-blue-900 rounded flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={40} className="text-white" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-gray-700 leading-relaxed">
                  Диагностику проводят <strong className="text-gray-900">эксперты с опытом 10+ лет</strong> в B2B-продажах и управлении,
                  по методикам <strong className="text-blue-900">Андрея Веселова</strong>, автора книги 
                  <em className="text-gray-600"> «Организация работы отдела продаж. Системный подход»</em>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Стоимость услуги
            </h3>
            <p className="text-gray-600">Прозрачное ценообразование</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-10 bg-white border-2 border-green-600 relative">
              <div className="absolute top-6 right-6">
                <Badge className="bg-green-600 text-white border-0 text-xs font-semibold px-3 py-1">
                  БЕСПЛАТНО
                </Badge>
              </div>
              <div className="text-center pt-4">
                <div className="w-16 h-16 rounded bg-green-600 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Gift" size={32} className="text-white" />
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-4">0 ₽</div>
                <p className="text-lg text-gray-700 font-medium">
                  Для отделов продаж от 5 человек
                </p>
              </div>
            </Card>

            <Card className="p-10 bg-white border-2 border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 rounded bg-blue-900 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Briefcase" size={32} className="text-white" />
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-4">20 000 ₽</div>
                <p className="text-lg text-gray-700 font-medium">
                  Для отделов продаж до 5 человек
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-10 bg-blue-50 border-2 border-blue-200">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded bg-blue-900 flex items-center justify-center flex-shrink-0">
                <Icon name="ShieldCheck" size={28} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Гарантия полезности</h4>
                <p className="text-gray-700 leading-relaxed">
                  Если после встречи вы не возьмёте в работу ни одной рекомендации или сочтёте диагностику бесполезной — оплата не требуется
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы узнать потенциал роста?
          </h3>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Запишитесь на бесплатную диагностику и получите расчёт в рублях и план действий
          </p>
          <Button 
            onClick={() => scrollToSection('contact')} 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-10 py-6 font-semibold"
          >
            Записаться на диагностику
          </Button>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Оставьте заявку
            </h3>
            <p className="text-gray-600">Свяжемся в течение 1 рабочего дня</p>
          </div>

          <Card className="p-10 border-2 border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Имя *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Телефон *</label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 916 363-63-91"
                  className="border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ivan@company.ru"
                  className="border-gray-300 focus:border-blue-900 focus:ring-blue-900"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Комментарий</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о компании и отделе продаж..."
                  className="border-gray-300 min-h-[120px] focus:border-blue-900 focus:ring-blue-900"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white text-base py-6 font-semibold"
              >
                Отправить заявку
              </Button>
            </form>

            <div className="mt-10 pt-10 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-6 text-sm font-medium">Или свяжитесь напрямую</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/79163636391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded transition-colors font-medium"
                >
                  <Icon name="Phone" size={20} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/veselovandrei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors font-medium"
                >
                  <Icon name="Send" size={20} />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                  <Icon name="TrendingUp" size={20} className="text-white" />
                </div>
                <h2 className="text-lg font-semibold">Диагностика точки роста</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Профессиональная диагностика продаж для B2B-компаний
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-300">Контакты</h3>
              <div className="space-y-2 text-sm">
                <a href="https://t.me/veselovandrei" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                  Telegram
                </a>
                <a href="https://wa.me/79163636391" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 text-gray-300">Навигация</h3>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('who')} className="block text-gray-400 hover:text-white transition-colors">
                  Для кого
                </button>
                <button onClick={() => scrollToSection('process')} className="block text-gray-400 hover:text-white transition-colors">
                  Процесс
                </button>
                <button onClick={() => scrollToSection('pricing')} className="block text-gray-400 hover:text-white transition-colors">
                  Тарифы
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              © 2024 Диагностика точки роста продаж. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
