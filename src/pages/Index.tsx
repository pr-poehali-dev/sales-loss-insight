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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Диагностика продаж
          </h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('for-whom')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Для кого
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Как проходит
            </button>
            <button onClick={() => scrollToSection('results')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Результаты
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Стоимость
            </button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Записаться
          </Button>
        </nav>
      </div>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Диагностика точки роста
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  продаж
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
                Узнайте, где ваш бизнес теряет прибыль — и как вырасти до +150%
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Индивидуальная встреча с экспертом, на которой вы получите оценку потенциала роста оборота и прибыли в рублях и рекомендации, что конкретно нужно изменить, чтобы расти быстрее.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')} 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 mb-4"
              >
                👉 Записаться на диагностику
              </Button>
              <p className="text-sm text-gray-500">60–90 минут онлайн в Zoom</p>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/ac67bf16-52eb-49a3-95c1-aa830d31ee66/files/54ad2466-3b1c-4476-b9d6-58d631ab3096.jpg"
                alt="Диагностика продаж"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="for-whom" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Для кого эта диагностика
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Users', text: 'Для собственников и директоров бизнеса с отделом продаж от 5 человек' },
              { icon: 'TrendingUp', text: 'Для компаний, где продажи идут стабильно, но рост замедлился' },
              { icon: 'Target', text: 'Для тех, кто хочет понять, где "застряли" деньги и что мешает масштабироваться' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <Icon name={item.icon as any} size={32} className="text-white" />
                </div>
                <p className="text-gray-700 text-lg">{item.text}</p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: '💬', title: 'Анализ бизнеса', desc: 'Эксперт задаёт вопросы о компании, рынке, клиентской базе и системе продаж' },
              { icon: '📊', title: 'Выявление проблем', desc: 'Анализирует текущие показатели и выявляет узкие места' },
              { icon: '💡', title: 'Расчёт потенциала', desc: 'Рассчитывает потенциал роста оборота и прибыли' },
              { icon: '🧭', title: 'Рекомендации', desc: 'Даёт конкретные рекомендации, что нужно скорректировать' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 text-center">
            <p className="text-xl font-medium text-gray-800">
              После встречи вы поймёте, <span className="font-bold text-purple-700">какие действия реально приведут к увеличению продаж и прибыли.</span>
            </p>
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Результат диагностики
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'TrendingUp', title: 'Прогноз роста оборота и прибыли', desc: 'в рублях и процентах' },
              { icon: 'ListChecks', title: 'Перечень конкретных шагов', desc: 'для увеличения продаж' },
              { icon: 'FileText', title: 'Экспертное заключение', desc: 'с зонами потерь и точками влияния' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <Icon name={item.icon as any} size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">✅ {item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-3xl p-8 text-center">
            <p className="text-2xl font-bold text-gray-800 mb-2">
              Вы получите ясную картину:
            </p>
            <p className="text-xl text-gray-700">
              где вы теряете деньги и как превратить это в рост.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Полезные материалы в подарок
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">
            После диагностики вы сможете использовать эти инструменты для самостоятельной работы и контроля отдела продаж.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🧾', title: 'Чек-лист проверки РОПа' },
              { emoji: '📋', title: 'Чек-лист проверки МОПа' },
              { emoji: '🗂', title: 'План РОПа на 90 дней' },
              { emoji: '📈', title: 'Калькулятор «Точки роста» (Excel)' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h4 className="text-lg font-semibold text-gray-700">{item.title}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Кто проводит диагностику
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Диагностику проводят <span className="font-bold text-purple-700">эксперты-практики с опытом 10+ лет</span> в B2B-продажах и управлении, по методикам и технологиям <span className="font-bold">Андрея Веселова</span>, автора 5 книг в т.ч. <span className="italic">"Организация работы отдела продаж. Системный подход"</span>.
          </p>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Стоимость и гарантия полезности
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-10 text-center border-4 border-green-500 hover:shadow-2xl transition-all">
              <div className="text-6xl mb-4">💼</div>
              <h4 className="text-3xl font-bold mb-4 text-green-600">Бесплатно</h4>
              <p className="text-xl text-gray-700">для компаний с отделом продаж от 5 человек</p>
            </Card>
            <Card className="p-10 text-center hover:shadow-xl transition-all">
              <div className="text-6xl mb-4">💰</div>
              <h4 className="text-3xl font-bold mb-4">20 000 ₽</h4>
              <p className="text-xl text-gray-700">для отделов продаж до 5 человек</p>
            </Card>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-10">
            <div className="flex items-start gap-4">
              <div className="text-5xl">🛡</div>
              <div>
                <h4 className="text-2xl font-bold mb-4">Гарантия полезности:</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Если после встречи вы не возьмёте в работу ни одной рекомендации или сочтёте диагностику бесполезной — оплата не требуется.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h3 className="text-4xl md:text-6xl font-bold mb-6">
            Хотите узнать, где теряются ваши продажи — и что даст рост на 150%?
          </h3>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Запишитесь на бесплатную диагностику, чтобы получить расчёт потенциала роста и конкретные рекомендации от эксперта.
          </p>
          
          <Card className="p-8 md:p-12 bg-white/95 backdrop-blur">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-lg py-6"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="text-lg py-6"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="text-lg py-6"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Расскажите коротко о вашем бизнесе и отделе продаж"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="text-lg"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xl py-7 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
              >
                🚀 Записаться на диагностику
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Диагностика точки роста продаж
          </h2>
          <p className="text-gray-400 mb-6">
            Узнайте потенциал роста вашего бизнеса за одну встречу
          </p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="mailto:info@example.com" className="hover:text-purple-400 transition-colors">
              info@example.com
            </a>
            <a href="tel:+79999999999" className="hover:text-purple-400 transition-colors">
              +7 (999) 999-99-99
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
