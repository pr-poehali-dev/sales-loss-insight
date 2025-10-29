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
    <div className="min-h-screen bg-slate-950">
      <div className="fixed top-0 left-0 right-0 bg-slate-950/90 backdrop-blur-xl z-50 border-b border-slate-800">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white tracking-tight">
            Точка роста
          </h1>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('who')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Для кого
            </button>
            <button onClick={() => scrollToSection('process')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Процесс
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">
              Тарифы
            </button>
          </div>
          <Button onClick={() => scrollToSection('contact')} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-0">
            Записаться
          </Button>
        </nav>
      </div>

      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-8 bg-blue-600/10 text-blue-400 border border-blue-600/20 px-4 py-2 text-sm font-medium">
                Бесплатная диагностика для отделов 5+ человек
              </Badge>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tight">
                <span className="text-white">Диагностика</span>
                <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
                  точки роста продаж
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 mb-6 font-medium">
                Узнайте, где бизнес теряет прибыль — и как вырасти до +150%
              </p>
              <p className="text-base md:text-lg text-slate-500 mb-12 leading-relaxed">
                Индивидуальная встреча с экспертом. Получите расчёт потенциала роста в рублях и план действий.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-7 rounded-xl font-semibold shadow-2xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105 border-0"
                >
                  Записаться на диагностику
                </Button>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Icon name="Clock" size={16} />
                  <span>60–90 минут в Zoom</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/ac67bf16-52eb-49a3-95c1-aa830d31ee66/files/8544e9cb-f094-4189-bd3c-7d04f0d793e5.jpg"
                alt="Руководитель отдела продаж"
                className="relative rounded-3xl shadow-2xl border border-slate-800/50"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="who" className="py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Для кого эта диагностика
            </h3>
            <p className="text-slate-400 text-lg">Проверьте, подходит ли вам</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: 'Users', 
                text: 'Собственники и директора с отделом продаж от 5 человек',
                color: 'blue'
              },
              { 
                icon: 'TrendingUp', 
                text: 'Компании, где продажи стабильны, но рост замедлился',
                color: 'purple'
              },
              { 
                icon: 'Target', 
                text: 'Те, кто хочет понять, где застряли деньги',
                color: 'pink'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-slate-900 border-slate-800 hover:border-blue-600/50 transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mb-6">
                  <Icon name={item.icon as any} size={28} className="text-blue-500" />
                </div>
                <p className="text-slate-300 text-base leading-relaxed">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Что происходит на диагностике
            </h3>
            <p className="text-slate-400 text-lg">4 этапа работы с экспертом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: 'MessageSquare', title: 'Интервью', desc: 'Вопросы о компании, рынке, клиентской базе и продажах', number: '01' },
              { icon: 'BarChart3', title: 'Анализ', desc: 'Выявление узких мест и точек потерь прибыли', number: '02' },
              { icon: 'Calculator', title: 'Расчёт', desc: 'Потенциал роста оборота и прибыли в рублях', number: '03' },
              { icon: 'Compass', title: 'План', desc: 'Конкретные рекомендации для увеличения выручки', number: '04' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-slate-900 border-slate-800 hover:bg-slate-800/50 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[120px] font-black text-slate-800/20 group-hover:text-slate-800/40 transition-colors leading-none -mr-4 -mt-4">
                  {item.number}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} size={24} className="text-blue-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
          <Card className="p-10 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-green-600/30">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-green-600/30 border border-green-600/40 flex items-center justify-center flex-shrink-0">
                <Icon name="Lightbulb" size={32} className="text-green-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-3">Результат</h4>
                <p className="text-slate-200 text-lg leading-relaxed font-medium">
                  Вы поймёте, какие действия приведут к росту продаж и прибыли
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Что вы получите
            </h3>
            <p className="text-slate-400 text-lg">После встречи на руках будет</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: 'TrendingUp', title: 'Прогноз роста', desc: 'в рублях и процентах' },
              { icon: 'ListChecks', title: 'План действий', desc: 'конкретные шаги' },
              { icon: 'FileText', title: 'Заключение', desc: 'зоны потерь и точки влияния' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-slate-900 border-slate-800 hover:border-blue-600/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mb-6">
                  <Icon name={item.icon as any} size={28} className="text-blue-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400">{item.desc}</p>
              </Card>
            ))}
          </div>
          <Card className="p-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-600/30">
            <p className="text-center text-2xl font-bold text-white">
              Ясная картина: где теряете деньги и как превратить это в рост
            </p>
          </Card>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Бонусные материалы
            </h3>
            <p className="text-slate-400 text-lg">Получите в подарок</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: '🧾', title: 'Чек-лист РОПа' },
              { emoji: '📋', title: 'Чек-лист МОПа' },
              { emoji: '🗂', title: 'План РОПа на 90 дней' },
              { emoji: '📈', title: 'Калькулятор роста (Excel)' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 bg-slate-900 border-slate-800 hover:bg-slate-800/50 transition-all duration-300 text-center">
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h4 className="text-sm font-semibold text-slate-300">{item.title}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Кто проводит
            </h3>
          </div>
          <Card className="p-12 bg-slate-900 border-slate-800">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={48} className="text-white" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-slate-300 text-lg leading-relaxed">
                  <span className="text-white font-semibold">Эксперты-практики с опытом 10+ лет</span> в B2B-продажах и управлении,
                  по методикам <span className="text-blue-400 font-semibold">Андрея Веселова</span>,
                  автора книги <span className="text-slate-400 italic">«Организация работы отдела продаж»</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Стоимость
            </h3>
            <p className="text-slate-400 text-lg">Выберите свой вариант</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-10 bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-600/30 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-600 text-white border-0 text-xs font-bold">
                  БЕСПЛАТНО
                </Badge>
              </div>
              <div className="text-center pt-8">
                <div className="w-16 h-16 rounded-2xl bg-green-600/20 border border-green-600/30 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Gift" size={32} className="text-green-400" />
                </div>
                <div className="text-6xl font-black text-white mb-4">0 ₽</div>
                <p className="text-xl text-slate-300 font-medium">
                  Отдел продаж от 5 человек
                </p>
              </div>
            </Card>

            <Card className="p-10 bg-slate-900 border-slate-800 relative overflow-hidden">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Briefcase" size={32} className="text-blue-500" />
                </div>
                <div className="text-6xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                  20 000 ₽
                </div>
                <p className="text-xl text-slate-300 font-medium">
                  Отдел продаж до 5 человек
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-10 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-600/30">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-yellow-600/30 border border-yellow-600/40 flex items-center justify-center flex-shrink-0">
                <Icon name="ShieldCheck" size={28} className="text-yellow-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-3">Гарантия полезности</h4>
                <p className="text-slate-200 text-lg leading-relaxed font-medium">
                  Если не возьмёте в работу ни одной рекомендации — оплата не требуется
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Где теряются ваши продажи?
          </h3>
          <p className="text-xl md:text-2xl text-blue-100 mb-10">
            Узнайте на бесплатной диагностике и получите план роста до +150%
          </p>
          <Button 
            onClick={() => scrollToSection('contact')} 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-slate-100 text-xl px-10 py-7 rounded-xl font-bold shadow-2xl hover:scale-105 transition-all duration-300 border-0"
          >
            Записаться на диагностику
          </Button>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Записаться
            </h3>
            <p className="text-slate-400 text-lg">Свяжемся в течение 1 рабочего дня</p>
          </div>

          <Card className="p-10 bg-slate-900 border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Имя *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Телефон *</label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 916 363-63-91"
                  className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                <Input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ivan@company.ru"
                  className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Комментарий</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о компании и отделе продаж..."
                  className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 min-h-[120px] focus:border-blue-600"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl font-semibold border-0"
              >
                Отправить заявку
              </Button>
            </form>

            <div className="mt-10 pt-10 border-t border-slate-800">
              <p className="text-center text-slate-400 mb-6 text-sm">Или свяжитесь напрямую</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/79163636391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors font-medium"
                >
                  <Icon name="Phone" size={20} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/veselovandrei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium"
                >
                  <Icon name="Send" size={20} />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-slate-900 border-t border-slate-800 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-3">Диагностика точки роста продаж</h2>
          <p className="text-slate-400 mb-8 text-sm">
            Узнайте, где бизнес теряет прибыль — и как вырасти до +150%
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://t.me/veselovandrei" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">
              Telegram
            </a>
            <a href="https://wa.me/79163636391" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">
              WhatsApp
            </a>
          </div>
          <p className="text-slate-500 text-xs">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}