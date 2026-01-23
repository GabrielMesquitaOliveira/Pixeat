"use client";

import { useState } from "react";
import { Search, ShoppingCart, Plus, Minus, X, Check, ArrowLeft, UtensilsCrossed } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  // Entradas
  {
    id: "1",
    name: "Salada Caesar",
    description: "Alface romana, croutons, parmesão e molho caesar",
    price: 28.90,
    image: "https://images.unsplash.com/photo-1677653805080-59c57727c84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGZyZXNofGVufDF8fHx8MTc2NzcwNjY1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "entradas",
  },
  {
    id: "2",
    name: "Bruschetta",
    description: "Pão italiano com tomate, manjericão e azeite",
    price: 24.90,
    image: "https://images.unsplash.com/photo-1677653805080-59c57727c84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGZyZXNofGVufDF8fHx8MTc2NzcwNjY1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "entradas",
  },
  // Pratos Principais
  {
    id: "3",
    name: "Burger Artesanal",
    description: "180g de carne, queijo cheddar, bacon, alface, tomate e molho especial",
    price: 45.90,
    image: "https://images.unsplash.com/photo-1688246780164-00c01647e78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmb29kfGVufDF8fHx8MTc2NzY1ODIwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "principais",
  },
  {
    id: "4",
    name: "Pizza Margherita",
    description: "Molho de tomate, mussarela, manjericão fresco",
    price: 52.90,
    image: "https://images.unsplash.com/photo-1563245738-9169ff58eccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY3Njc5MjgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "principais",
  },
  {
    id: "5",
    name: "Pasta Carbonara",
    description: "Espaguete com bacon, parmesão e molho cremoso",
    price: 42.90,
    image: "https://images.unsplash.com/photo-1703258581842-31608ecd6528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW58ZW58MXx8fHwxNzY3NzQ4OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "principais",
  },
  {
    id: "6",
    name: "Risoto de Funghi",
    description: "Arroz arbóreo com cogumelos e parmesão",
    price: 48.90,
    image: "https://images.unsplash.com/photo-1703258581842-31608ecd6528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW58ZW58MXx8fHwxNzY3NzQ4OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "principais",
  },
  // Bebidas
  {
    id: "7",
    name: "Coca-Cola 350ml",
    description: "Refrigerante gelado",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1735643434124-f51889fa1f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2RhJTIwZHJpbmt8ZW58MXx8fHwxNzY3NzUyMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "bebidas",
  },
  {
    id: "8",
    name: "Suco Natural",
    description: "Laranja, limão ou abacaxi",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1735643434124-f51889fa1f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2RhJTIwZHJpbmt8ZW58MXx8fHwxNzY3NzUyMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "bebidas",
  },
  // Sobremesas
  {
    id: "9",
    name: "Tiramisu",
    description: "Sobremesa italiana com café e mascarpone",
    price: 22.90,
    image: "https://images.unsplash.com/photo-1679942262057-d5732f732841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3Njc3MjQxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "sobremesas",
  },
  {
    id: "10",
    name: "Petit Gateau",
    description: "Bolo de chocolate quente com sorvete",
    price: 26.90,
    image: "https://images.unsplash.com/photo-1679942262057-d5732f732841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZXxlbnwxfHx8fDE3Njc3MjQxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "sobremesas",
  },
];

const categories = [
  {
    id: "all",
    label: "Todos",
    image: "https://images.unsplash.com/photo-1756397481872-ed981ef72a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc2Nzk5ODg4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "entradas",
    label: "Entradas",
    image: "https://images.unsplash.com/photo-1763553113344-b6a32fcd9ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBldGl6ZXJzJTIwc3RhcnRlcnMlMjBmb29kfGVufDF8fHx8MTc2Nzk5OTc4OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "principais",
    label: "Pratos Principais",
    image: "https://images.unsplash.com/photo-1616114602131-ba24fc328173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWluJTIwY291cnNlJTIwZGlubmVyfGVufDF8fHx8MTc2Nzk5OTc4OXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "bebidas",
    label: "Bebidas",
    image: "https://images.unsplash.com/photo-1697029237968-aff8846b2d8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlua3MlMjBiZXZlcmFnZXMlMjBjb2NrdGFpbHxlbnwxfHx8fDE3Njc5OTk3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "sobremesas",
    label: "Sobremesas",
    image: "https://images.unsplash.com/photo-1737700088850-d0b53f9d39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwcGFzdHJ5JTIwc3dlZXR8ZW58MXx8fHwxNzY3OTk5Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
];

interface CardapioDigitalProps {
  onNavigate?: (page: string) => void;
}

export function CardapioDigital({ onNavigate }: CardapioDigitalProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setSelectedProduct(null);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(cart.map((item) => {
      if (item.id === productId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter((item) => item.quantity > 0));
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const confirmOrder = () => {
    setOrderConfirmed(true);
    setTimeout(() => {
      setCart([]);
      setIsCartOpen(false);
      setOrderConfirmed(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-background pb-28">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="px-4 sm:px-6 py-5">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              {onNavigate && (
                <button
                  onClick={() => onNavigate("qrcodes")}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <div className="flex items-center gap-3">
                {/* Logo Pixeat */}
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#74C3BF] rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <UtensilsCrossed className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h1 className="text-2xl text-primary" style={{ fontFamily: 'Inter, sans-serif' }}>Pixeat</h1>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <p className="text-sm text-muted-foreground">Mesa 15</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Restaurante</p>
              <p className="text-sm">Le Bistro</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar no cardápio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-input-background border-0 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-sm"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="overflow-x-auto px-4 sm:px-6 pb-4 scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm whitespace-nowrap transition-all duration-200 ${selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                  : "bg-white text-secondary-foreground hover:bg-secondary border border-border"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 sm:px-6 py-8">
        {/* Restaurant Hero */}
        <div className="mb-8 -mx-4 sm:-mx-6">
          <div className="relative h-64 sm:h-72 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1756397481872-ed981ef72a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc2Nzk5ODg4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Le Bistro Restaurant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h2 className="text-3xl sm:text-4xl text-white mb-2">Bem-vindo ao Le Bistro</h2>
              <p className="text-white/90 text-sm sm:text-base max-w-2xl">
                Experimente nossa culinária artesanal com ingredientes frescos e selecionados.
                Navegue pelo cardápio e faça seu pedido diretamente da sua mesa.
              </p>
            </div>
          </div>
        </div>

        {/* Category Cards */}
        <div className="mb-8">
          <h2 className="text-2xl mb-4">Explore por Categoria</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Card
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${selectedCategory === category.id
                  ? "ring-2 ring-primary shadow-lg shadow-primary/20"
                  : ""
                  }`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="text-white text-sm sm:text-base mb-1">{category.label}</h3>
                  </div>
                  {selectedCategory === category.id && (
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Products List Header */}
        <div className="mb-4">
          <h2 className="text-xl">
            {selectedCategory === "all" ? "Todos os Produtos" : categories.find(c => c.id === selectedCategory)?.label}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group border-border/50"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5">
                <h3 className="text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">A partir de</p>
                    <span className="text-2xl text-primary">
                      R$ {product.price.toFixed(2)}
                    </span>
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-shadow"
                    size="sm"
                  >
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-end md:items-center justify-center p-0 md:p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-t-3xl md:rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom md:slide-in-from-bottom-0 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
              <ImageWithFallback
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-3xl mb-3">{selectedProduct.name}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProduct.description}
              </p>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl text-primary">
                  R$ {selectedProduct.price.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground">/ unidade</span>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 h-14 rounded-xl"
                  onClick={() => setSelectedProduct(null)}
                >
                  Voltar
                </Button>
                <Button
                  className="flex-1 h-14 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => addToCart(selectedProduct)}
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Adicionar ao Pedido
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary to-[#74C3BF] text-white rounded-2xl shadow-2xl shadow-primary/40 px-6 py-4 flex items-center gap-4 hover:shadow-3xl hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom"
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-white text-primary rounded-full flex items-center justify-center text-xs">
              {getTotalItems()}
            </div>
          </div>
          <div className="text-left">
            <p className="text-xs opacity-90">Meu Pedido</p>
            <p className="text-lg">R$ {getTotalPrice().toFixed(2)}</p>
          </div>
        </button>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center md:p-4 animate-in fade-in duration-200"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="bg-white rounded-t-3xl md:rounded-3xl w-full md:max-w-lg max-h-[90vh] flex flex-col animate-in slide-in-from-bottom md:slide-in-from-bottom-0 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cart Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div>
                <h2 className="text-2xl">Meu Pedido</h2>
                <p className="text-sm text-muted-foreground mt-1">Mesa 15</p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-muted rounded-xl transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                  <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-10 h-10 opacity-30" />
                  </div>
                  <p className="text-lg">Seu carrinho está vazio</p>
                  <p className="text-sm mt-2">Adicione itens do cardápio para começar</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-secondary/30 rounded-2xl p-4 hover:bg-secondary/50 transition-colors">
                      <div className="w-24 h-24 rounded-xl overflow-hidden bg-muted flex-shrink-0 shadow-md">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-medium text-lg">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:bg-destructive/10 p-1.5 rounded-lg transition-colors ml-2"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        <p className="text-sm text-primary mb-3">
                          R$ {item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 bg-white rounded-full p-1 shadow-sm">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="text-lg">
                            R$ {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-border space-y-4 bg-secondary/10">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>R$ {getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Taxa de serviço</span>
                    <span className="text-emerald-600">Grátis</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xl pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-3xl text-primary">
                    R$ {getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <Button
                  onClick={confirmOrder}
                  className="w-full h-14 text-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  disabled={orderConfirmed}
                >
                  {orderConfirmed ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Pedido Enviado!
                    </>
                  ) : (
                    "Enviar Pedido para Cozinha"
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Order Confirmation Toast */}
      {orderConfirmed && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top duration-300">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Check className="w-6 h-6" />
          </div>
          <div>
            <p className="font-medium">Pedido enviado com sucesso!</p>
            <p className="text-sm text-white/90">Em breve chegará na sua mesa</p>
          </div>
        </div>
      )}
    </div>
  );
}