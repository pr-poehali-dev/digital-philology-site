import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-philology-midnight via-philology-darkPurple to-philology-navy">
      <nav className="fixed top-0 w-full bg-philology-midnight/90 backdrop-blur-md z-50 border-b border-philology-purple/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">
              Прикладная <span className="text-philology-cyan">Цифровая</span> Филология
            </h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'program', label: 'Программа' },
                { id: 'teachers', label: 'Преподаватели' },
                { id: 'admission', label: 'Поступление' },
                { id: 'contacts', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-philology-cyan ${
                    activeSection === item.id ? 'text-philology-cyan' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Создаём будущее <span className="text-philology-purple">филологии</span>
              </h2>
              <p className="text-xl text-philology-cyan/90 mb-8">
                Инновационная программа РУДН, объединяющая классическую филологию с современными цифровыми технологиями
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => scrollToSection('admission')}
                  className="bg-philology-purple hover:bg-philology-darkPurple text-white px-8 py-6 text-lg"
                >
                  Поступить
                </Button>
                <Button 
                  onClick={() => scrollToSection('program')}
                  variant="outline"
                  className="border-philology-cyan text-philology-cyan hover:bg-philology-cyan hover:text-philology-midnight px-8 py-6 text-lg"
                >
                  Программа
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-philology-purple to-philology-navy rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/b067838e-3857-4758-9623-a9ffbd05efc3/files/d46a77fc-cf21-4ccb-a152-871ead1c36e4.jpg" 
                  alt="Digital Philology" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Программа обучения</h2>
          <p className="text-center text-philology-cyan/80 mb-12 text-lg">
            Комплексная подготовка на стыке гуманитарных и технических наук
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'BookOpen',
                title: 'Классическая филология',
                description: 'Глубокое изучение языка, литературы и лингвистических методов',
                courses: ['Теория языка', 'История литературы', 'Текстология', 'Семантика']
              },
              {
                icon: 'Code',
                title: 'Цифровые технологии',
                description: 'Современные инструменты обработки текстов и данных',
                courses: ['Python для филологов', 'NLP и лингвистика', 'Корпусная лингвистика', 'Data Science']
              },
              {
                icon: 'Lightbulb',
                title: 'Прикладные проекты',
                description: 'Реальные задачи на пересечении гуманитарных и IT-наук',
                courses: ['Цифровые издания', 'Анализ текстов', 'Лингвистические базы', 'Web-проекты']
              }
            ].map((module, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-md border-philology-purple/30 hover:border-philology-cyan/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-philology-purple/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={module.icon} className="text-philology-cyan" size={24} />
                  </div>
                  <CardTitle className="text-white text-xl">{module.title}</CardTitle>
                  <CardDescription className="text-philology-cyan/80">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.courses.map((course, idx) => (
                      <li key={idx} className="flex items-center text-white/80 text-sm">
                        <Icon name="CheckCircle" size={16} className="text-philology-purple mr-2" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Наши преподаватели</h2>
          <p className="text-center text-philology-cyan/80 mb-12 text-lg">
            Эксперты в филологии и цифровых технологиях
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Марина Александровна Брагина',
                position: 'Заместитель директора по учебной работе, кандидат филологических наук, доцент',
                specialization: 'Методика преподавания Русского языка',
                image: 'https://cdn.poehali.dev/files/c39ef76f-a96e-4cd3-869c-3866313dea11.jpg'
              },
              {
                name: 'Доц. Михаил Петров',
                position: 'Декан факультета',
                specialization: 'Цифровые издания, текстология',
                image: '/placeholder.svg'
              },
              {
                name: 'Доц. Анна Иванова',
                position: 'Руководитель программы',
                specialization: 'NLP, машинное обучение для текстов',
                image: '/placeholder.svg'
              }
            ].map((teacher, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-philology-darkPurple to-philology-navy border-philology-purple/30 hover:border-philology-cyan/50 transition-all duration-300 hover:scale-105 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-48 bg-philology-purple/20 flex items-center justify-center">
                  <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg">{teacher.name}</CardTitle>
                  <CardDescription className="text-philology-cyan">
                    {teacher.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-sm">{teacher.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="admission" className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Поступление</h2>
          <p className="text-center text-philology-cyan/80 mb-12 text-lg">
            Присоединяйтесь к новому поколению филологов
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-md border-philology-purple/30">
              <CardHeader>
                <Icon name="GraduationCap" className="text-philology-cyan mb-2" size={32} />
                <CardTitle className="text-white">Требования</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-2">
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-philology-purple mt-1" size={16} />
                  <span>Среднее общее образование</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-philology-purple mt-1" size={16} />
                  <span>ЕГЭ: Русский язык, Литература, Иностранный язык</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-philology-purple mt-1" size={16} />
                  <span>Минимальный балл: 75</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" className="text-philology-purple mt-1" size={16} />
                  <span>Портфолио (опционально)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-philology-purple/30">
              <CardHeader>
                <Icon name="Calendar" className="text-philology-cyan mb-2" size={32} />
                <CardTitle className="text-white">Сроки</CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-3">
                <div>
                  <div className="font-semibold text-philology-cyan">Подача документов</div>
                  <div>20 июня - 25 июля 2025</div>
                </div>
                <div>
                  <div className="font-semibold text-philology-cyan">Вступительные испытания</div>
                  <div>1 августа - 10 августа 2025</div>
                </div>
                <div>
                  <div className="font-semibold text-philology-cyan">Зачисление</div>
                  <div>20 августа 2025</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-philology-purple to-philology-darkPurple border-philology-cyan/30">
            <CardHeader>
              <CardTitle className="text-white text-2xl text-center">
                Бюджетные места: 25 | Платные места: 15
              </CardTitle>
              <CardDescription className="text-philology-cyan text-center text-lg">
                Стоимость обучения: 280 000 ₽/год
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-white mb-4">Контакты</h2>
          <p className="text-center text-philology-cyan/80 mb-12 text-lg">
            Остались вопросы? Свяжитесь с нами
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-philology-purple/30">
              <CardHeader>
                <CardTitle className="text-white">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-white/80">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-philology-cyan" size={20} />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div>г. Москва, ул. Миклухо-Маклая, д. 6</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-philology-cyan" size={20} />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div>+7 (495) 433-00-00</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-philology-cyan" size={20} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div>digital.philology@rudn.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Globe" className="text-philology-cyan" size={20} />
                  <div>
                    <div className="font-semibold">Сайт</div>
                    <div>rudn.ru</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-philology-purple/30">
              <CardHeader>
                <CardTitle className="text-white">Напишите нам</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-white/10 border-philology-purple/30 text-white placeholder:text-white/50"
                  />
                  <Input 
                    type="email"
                    placeholder="Email" 
                    className="bg-white/10 border-philology-purple/30 text-white placeholder:text-white/50"
                  />
                  <Textarea 
                    placeholder="Ваше сообщение" 
                    rows={4}
                    className="bg-white/10 border-philology-purple/30 text-white placeholder:text-white/50"
                  />
                  <Button className="w-full bg-philology-purple hover:bg-philology-darkPurple text-white">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-philology-midnight border-t border-philology-purple/20">
        <div className="container mx-auto text-center text-white/60">
          <p>© 2025 РУДН. Прикладная цифровая филология. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;