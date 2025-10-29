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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Диагностика роста продаж
          </h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('who')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Для кого
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Как это работает
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Стоимость
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Записаться
            </button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Записаться
          </Button>
        </nav>
      </div>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Диагностика точки роста
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                продаж
              </span>
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 max-w-4xl mx-auto">
              Узнайте, где ваш бизнес теряет прибыль — и как вырасти до +150%
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Индивидуальная встреча с экспертом, на которой вы получите оценку потенциала роста оборота и прибыли в рублях
              и рекомендации, что конкретно нужно изменить, чтобы расти быстрее.
            </p>
            <Button 
              onClick={() => scrollToSection('contact')} 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-10 py-7 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              👉 Записаться на диагностику
            </Button>
            <p className="text-gray-500 mt-4 text-lg">60–90 минут онлайн в Zoom</p>
          </div>
        </div>
      </section>

      <section id="who" className="py-20 px-4 bg-white/60">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Для кого эта диагностика
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: 'Users', 
                text: 'Для собственников и директоров бизнеса с отделом продаж от 5 человек',
                color: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: 'TrendingUp', 
                text: 'Для компаний, где продажи идут стабильно, но рост замедлился',
                color: 'from-purple-500 to-pink-500'
              },
              { 
                icon: 'Target', 
                text: 'Для тех, кто хочет понять, где "застряли" деньги и что мешает масштабироваться',
                color: 'from-orange-500 to-red-500'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-blue-200 bg-white">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <Icon name={item.icon as any} size={32} className="text-white" />
                </div>
                <p className="text-gray-700 text-lg text-center leading-relaxed">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Что происходит на диагностике
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
            Встреча в Zoom, где эксперт анализирует ваш бизнес и даёт конкретные рекомендации
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: 'MessageSquare', title: 'Эксперт задаёт вопросы', desc: 'о компании, рынке, клиентской базе и системе продаж' },
              { icon: 'BarChart3', title: 'Анализирует показатели', desc: 'и выявляет узкие места в процессах' },
              { icon: 'Calculator', title: 'Рассчитывает потенциал', desc: 'роста оборота и прибыли' },
              { icon: 'Compass', title: 'Даёт рекомендации', desc: 'что нужно скорректировать для роста' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Lightbulb" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Итог</h4>
                <p className="text-gray-700 text-lg">
                  После встречи вы поймёте, <strong>какие действия реально приведут к увеличению продаж и прибыли.</strong>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Результат диагностики
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: 'TrendingUp', title: 'Прогноз роста', desc: 'оборота и прибыли — в рублях и процентах' },
              { icon: 'ListChecks', title: 'Конкретные шаги', desc: 'для увеличения продаж' },
              { icon: 'FileText', title: 'Экспертное заключение', desc: 'с зонами потерь и точками влияния' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} size={28} className="text-white" />
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <Icon name="CheckCircle2" className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <h4 className="text-lg font-bold">{item.title}</h4>
                </div>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
          <Card className="p-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300">
            <p className="text-center text-xl font-bold text-gray-800">
              Вы получите ясную картину:<br />
              <span className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                где вы теряете деньги и как превратить это в рост.
              </span>
            </p>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Полезные материалы в подарок
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            После диагностики вы сможете использовать эти инструменты для самостоятельной работы и контроля отдела продаж
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ClipboardCheck', title: 'Чек-лист проверки РОПа', emoji: '🧾' },
              { icon: 'ClipboardList', title: 'Чек-лист проверки МОПа', emoji: '📋' },
              { icon: 'Calendar', title: 'План РОПа на 90 дней', emoji: '🗂' },
              { icon: 'Calculator', title: 'Калькулятор «Точки роста» (Excel)', emoji: '📈' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-blue-100">
                <div className="text-center">
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={24} className="text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Кто проводит диагностику
          </h3>
          <Card className="p-10 bg-white shadow-xl border-2 border-blue-200">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={48} className="text-white" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Диагностику проводят <strong>эксперты-практики с опытом 10+ лет</strong> в B2B-продажах и управлении,
                  по методикам и технологиям <strong>Андрея Веселова</strong>,
                  автора 5 книг в т.ч. <em>«Организация работы отдела продаж. Системный подход»</em>.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Стоимость и гарантия полезности
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-4 border-green-300 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                <Icon name="Gift" size={32} className="text-white" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-4">БЕСПЛАТНО</div>
                <p className="text-xl font-semibold text-gray-800">
                  для компаний с отделом продаж от 5 человек
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-4 border-blue-300 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                <Icon name="Briefcase" size={32} className="text-white" />
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  20 000 ₽
                </div>
                <p className="text-xl font-semibold text-gray-800">
                  для отделов продаж до 5 человек
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-10 bg-gradient-to-r from-yellow-50 to-orange-50 border-4 border-yellow-300">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                <Icon name="ShieldCheck" size={28} className="text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 text-gray-800">🛡 Гарантия полезности</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Если после встречи вы <strong>не возьмёте в работу ни одной рекомендации</strong> или сочтёте диагностику бесполезной — <strong className="text-orange-600">оплата не требуется.</strong>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Хотите узнать, где теряются ваши продажи — и что даст рост на 150%?
          </h3>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Запишитесь на бесплатную диагностику,<br />
            чтобы получить расчёт потенциала роста и конкретные рекомендации от эксперта.
          </p>
          <Button 
            onClick={() => scrollToSection('contact')} 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
          >
            🚀 Записаться на диагностику
          </Button>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Записаться на диагностику
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Заполните форму, и мы свяжемся с вами в течение 1 рабочего дня
          </p>

          <Card className="p-8 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон *</label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 916 363-63-91"
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ivan@company.ru"
                  className="bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Комментарий (необязательно)</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о своей компании и отделе продаж..."
                  className="bg-white min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-6"
              >
                Отправить заявку 🚀
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4">Или свяжитесь напрямую:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/79163636391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Icon name="Phone" size={20} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/veselovandrei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Icon name="Send" size={20} />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Диагностика точки роста продаж</h2>
          <p className="text-blue-200 mb-6">
            Узнайте, где ваш бизнес теряет прибыль — и как вырасти до +150%
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://t.me/veselovandrei" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              Telegram
            </a>
            <a href="https://wa.me/79163636391" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              WhatsApp
            </a>
          </div>
          <p className="text-blue-300 text-sm">
            © 2024 Диагностика роста продаж. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
