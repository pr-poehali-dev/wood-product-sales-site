import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeSection, setActiveSection] = useState('home')

  const products = [
    {
      id: 1,
      category: 'stairs',
      title: 'Ступени для лестниц',
      description: 'Изготовлены из массива дуба, идеально отшлифованы',
      price: 'от 2 500 ₽',
      image: '/img/0528b6b2-fa8f-441a-a6d3-623f0b6b93ad.jpg'
    },
    {
      id: 2,
      category: 'windowsills',
      title: 'Подоконники',
      description: 'Элегантные подоконники из натурального ореха',
      price: 'от 1 800 ₽',
      image: '/img/d5a5d1c3-39e6-4aaf-81e6-9c9d5d37e581.jpg'
    },
    {
      id: 3,
      category: 'portals',
      title: 'Порталы',
      description: 'Декоративные порталы из вишни ручной работы',
      price: 'от 8 500 ₽',
      image: '/img/5b2d272b-09bd-4ecf-a45a-351f45354b9a.jpg'
    },
    {
      id: 4,
      category: 'panels',
      title: 'Стеновые панели',
      description: 'Панели из массива сосны для отделки интерьера',
      price: 'от 950 ₽/м²',
      image: '/img/0528b6b2-fa8f-441a-a6d3-623f0b6b93ad.jpg'
    }
  ]

  const navigationItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'stairs', label: 'Ступени', icon: 'Move' },
    { id: 'windowsills', label: 'Подоконники', icon: 'RectangleHorizontal' },
    { id: 'portals', label: 'Порталы', icon: 'Doorway' },
    { id: 'panels', label: 'Панели', icon: 'Grid3x3' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-wood-wheat">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-wood-saddle rounded-lg flex items-center justify-center">
                <Icon name="TreePine" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-wood-dark">WoodCraft</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-wood-saddle ${
                    activeSection === item.id ? 'text-wood-saddle' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <Button className="bg-wood-saddle hover:bg-wood-chocolate text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 bg-gradient-to-b from-wood-wheat/20 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-wood-dark mb-6">
              Изделия из дерева<br />
              <span className="text-wood-saddle">премиум класса</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Создаем уникальные деревянные изделия для вашего дома.<br />
              Ступени, подоконники, порталы и панели из натурального дерева.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-wood-saddle hover:bg-wood-chocolate text-white px-8 py-3"
                onClick={() => scrollToSection('stairs')}
              >
                Посмотреть каталог
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-wood-saddle text-wood-saddle hover:bg-wood-saddle hover:text-white px-8 py-3"
                onClick={() => scrollToSection('contacts')}
              >
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Sections */}
      {['stairs', 'windowsills', 'portals', 'panels'].map((category) => (
        <section key={category} id={category} className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-wood-dark mb-4">
                {navigationItems.find(item => item.id === category)?.label}
              </h3>
              <div className="w-20 h-1 bg-wood-saddle mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter(product => product.category === category)
                .map((product) => (
                  <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-wood-dark mb-2">{product.title}</h4>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-wood-saddle">{product.price}</span>
                        <Button 
                          size="sm"
                          className="bg-wood-saddle hover:bg-wood-chocolate text-white"
                          onClick={() => scrollToSection('contacts')}
                        >
                          Заказать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-wood-wheat/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-wood-dark mb-4">Свяжитесь с нами</h3>
            <p className="text-xl text-gray-600">Обсудим ваш проект и подберем лучшее решение</p>
            <div className="w-20 h-1 bg-wood-saddle mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 border-0 shadow-lg">
              <h4 className="text-2xl font-semibold text-wood-dark mb-6">Оставить заявку</h4>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
                </div>
                <Button className="w-full bg-wood-saddle hover:bg-wood-chocolate text-white py-3">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold text-wood-dark mb-6">Контактная информация</h4>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-wood-saddle/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-wood-saddle" />
                    </div>
                    <div>
                      <p className="font-medium text-wood-dark">Телефон</p>
                      <p className="text-gray-600">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-wood-saddle/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-wood-saddle" />
                    </div>
                    <div>
                      <p className="font-medium text-wood-dark">Email</p>
                      <p className="text-gray-600">info@woodcraft.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-wood-saddle/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={20} className="text-wood-saddle" />
                    </div>
                    <div>
                      <p className="font-medium text-wood-dark">Адрес</p>
                      <p className="text-gray-600">Москва, ул. Мастеров, 15</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-wood-saddle/10 rounded-lg flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-wood-saddle" />
                    </div>
                    <div>
                      <p className="font-medium text-wood-dark">Режим работы</p>
                      <p className="text-gray-600">Пн-Пт: 9:00-18:00<br />Сб: 10:00-16:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-wood-saddle text-white p-8 rounded-lg">
                <h5 className="text-xl font-semibold mb-4">Почему выбирают нас?</h5>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Icon name="Check" size={16} />
                    <span>Опыт работы более 10 лет</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Check" size={16} />
                    <span>Только натуральные материалы</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Check" size={16} />
                    <span>Гарантия на все изделия</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Check" size={16} />
                    <span>Индивидуальный подход</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-wood-saddle rounded-lg flex items-center justify-center">
                <Icon name="TreePine" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold">WoodCraft</h1>
            </div>
            <p className="text-gray-300 mb-6">Создаем красоту из дерева для вашего дома</p>
            <div className="flex justify-center space-x-6">
              <a href="tel:+74951234567" className="text-gray-300 hover:text-wood-saddle transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="mailto:info@woodcraft.ru" className="text-gray-300 hover:text-wood-saddle transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-wood-saddle transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400">&copy; 2024 WoodCraft. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index;