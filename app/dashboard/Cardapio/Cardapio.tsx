"use client";

import { useState } from "react";
import { Search, Plus, Filter, Edit2, Trash2, UtensilsCrossed } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const produtos = [
  {
    id: 1,
    nome: "Executivo Frango À Parmegiana",
    descricao: "Bife de file de peito do frango à milanesa, gratinado com muçarela e arroz branco e fritas",
    preco: 34.99,
    categoria: "principais",
    disponivel: true,
    imagem: "https://images.unsplash.com/photo-1717158776685-d4b7c346e1a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBsYXRlfGVufDF8fHx8MTc2NzYyMDMwMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    nome: "Executivo Salmão",
    descricao: "Filé de salmão grelhado, arroz de brócolis, puré de batata e legumes salteados.",
    preco: 34.99,
    categoria: "principais",
    disponivel: true,
    imagem: "https://images.unsplash.com/photo-1563612116828-a62f45c706e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBmaXNoJTIwZGlubmVyfGVufDF8fHx8MTc2NzY2MzkwOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    nome: "Executivo Frango Grelhado",
    descricao: "Bife de picanha, arroz branco, feijão tropeiro, salada e batata frita.",
    preco: 34.99,
    categoria: "principais",
    disponivel: true,
    imagem: "https://images.unsplash.com/photo-1698556410824-4059a7ba055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMHJpY2V8ZW58MXx8fHwxNzY3NjM1MjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    nome: "Pasta Carbonara",
    descricao: "Massa artesanal com molho carbonara, bacon crocante e parmesão ralado",
    preco: 29.99,
    categoria: "principais",
    disponivel: true,
    imagem: "https://images.unsplash.com/photo-1609166639722-47053ca112ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW4lMjBmb29kfGVufDF8fHx8MTc2NzYwNDg2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    nome: "Porção de Coxinha",
    descricao: "10 unidades de coxinha de frango com catupiry",
    preco: 24.99,
    categoria: "entradas",
    disponivel: true,
    imagem: "https://images.unsplash.com/photo-1762631885089-87c72596dd70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMHNuYWNrcyUyMGFwcGV0aXplcnxlbnwxfHx8fDE3Njc2NjM5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    nome: "Petit Gateau",
    descricao: "Bolo de chocolate quente com sorvete de baunilha",
    preco: 18.99,
    categoria: "sobremesas",
    disponivel: false,
    imagem: "https://images.unsplash.com/photo-1737700087785-96e2225fb3a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwc3dlZXQlMjBwYXN0cnl8ZW58MXx8fHwxNzY3NjYzOTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    nome: "Bruschetta Mista",
    descricao: "Pão italiano tostado com tomate, manjericão, azeite e queijo",
    preco: 19.99,
    categoria: "entradas",
    disponivel: true,
    imagem: "https://images.unsplash.com/photo-1763553113344-b6a32fcd9ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBldGl6ZXJzJTIwc3RhcnRlcnMlMjBmb29kfGVufDF8fHx8MTc2Nzk5OTc4OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    nome: "Tiramisu Tradicional",
    descricao: "Sobremesa italiana com café, mascarpone e chocolate",
    preco: 22.99,
    categoria: "sobremesas",
    disponivel: true,
    imagem: "https://images.unsplash.com/photo-1737700088850-d0b53f9d39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwcGFzdHJ5JTIwc3dlZXR8ZW58MXx8fHwxNzY3OTk5Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 9,
    nome: "Suco Natural",
    descricao: "Laranja, limão ou morango - 500ml",
    preco: 12.99,
    categoria: "bebidas",
    disponivel: true,
    imagem: "https://images.unsplash.com/photo-1697029237968-aff8846b2d8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlua3MlMjBiZXZlcmFnZXMlMjBjb2NrdGFpbHxlbnwxfHx8fDE3Njc5OTk3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const categorias = [
  {
    id: "todos",
    label: "Todos",
    count: 9,
    image: "https://images.unsplash.com/photo-1756397481872-ed981ef72a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBlbGVnYW50fGVufDF8fHx8MTc2Nzk5ODg4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "entradas",
    label: "Entradas",
    count: 2,
    image: "https://images.unsplash.com/photo-1763553113344-b6a32fcd9ffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBldGl6ZXJzJTIwc3RhcnRlcnMlMjBmb29kfGVufDF8fHx8MTc2Nzk5OTc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "principais",
    label: "Pratos Principais",
    count: 4,
    image: "https://images.unsplash.com/photo-1616114602131-ba24fc328173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWluJTIwY291cnNlJTIwZGlubmVyfGVufDF8fHx8MTc2Nzk5OTc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "sobremesas",
    label: "Sobremesas",
    count: 2,
    image: "https://images.unsplash.com/photo-1737700088850-d0b53f9d39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwcGFzdHJ5JTIwc3dlZXR8ZW58MXx8fHwxNzY3OTk5Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "bebidas",
    label: "Bebidas",
    count: 1,
    image: "https://images.unsplash.com/photo-1697029237968-aff8846b2d8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlua3MlMjBiZXZlcmFnZXMlMjBjb2NrdGFpbHxlbnwxfHx8fDE3Njc5OTk3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

export function Cardapio() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProdutos = produtos.filter((produto) => {
    const matchesCategory = selectedCategory === "todos" || produto.categoria === selectedCategory;
    const matchesSearch =
      produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-8 space-y-6 bg-gradient-to-b from-secondary/30 to-background">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-2">Cardápio Digital</h1>
        <p className="text-muted-foreground">
          Gerencie todos os produtos do seu restaurante em um único lugar. Cadastre novos pratos e bebidas,
          edite informações como nome, descrição, preço e disponibilidade, e acompanhe o desempenho de vendas de cada item.
        </p>
      </div>

      {/* Search and Actions */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome ou descrição..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-input-background border-0 h-12"
          />
        </div>
        <Button variant="outline" className="gap-2 h-12">
          <Filter className="w-4 h-4" />
          Filtros
        </Button>
        <Button className="gap-2 bg-primary hover:bg-primary/90 h-12 shadow-lg">
          <Plus className="w-4 h-4" />
          Novo Prato
        </Button>
      </div>

      {/* Category Cards */}
      <div>
        <h2 className="text-2xl mb-4">Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categorias.map((cat) => (
            <Card
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${selectedCategory === cat.id
                ? "ring-2 ring-primary shadow-lg shadow-primary/20"
                : ""
                }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white mb-1">{cat.label}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-white/90 text-sm">{cat.count} itens</span>
                  </div>
                </div>
                {selectedCategory === cat.id && (
                  <div className="absolute top-3 right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <UtensilsCrossed className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl">
            {selectedCategory === "todos"
              ? "Todos os Produtos"
              : categorias.find(c => c.id === selectedCategory)?.label}
          </h2>
          <p className="text-muted-foreground">
            {filteredProdutos.length} {filteredProdutos.length === 1 ? 'produto' : 'produtos'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProdutos.map((produto) => (
            <Card key={produto.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {!produto.disponivel && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
                    <span className="bg-destructive text-white px-4 py-2 rounded-full text-sm shadow-lg">
                      Indisponível
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-lg mb-1 group-hover:text-primary transition-colors">{produto.nome}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {produto.descricao}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Preço</p>
                    <span className="text-2xl text-primary">
                      R$ {produto.preco.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors">
                      <Edit2 className="w-4 h-4" />
                      Editar
                    </Button>
                    <Button size="sm" variant="outline" className="text-destructive hover:bg-destructive/10 hover:border-destructive transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProdutos.length === 0 && (
          <Card className="p-12">
            <div className="text-center text-muted-foreground">
              <UtensilsCrossed className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p className="text-lg mb-2">Nenhum produto encontrado</p>
              <p className="text-sm">Tente ajustar sua busca ou filtros</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}