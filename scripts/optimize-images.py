from PIL import Image
import os

def optimize_image(input_path, output_path, quality=85, max_width=1200):
    """
    Otimiza uma imagem reduzindo qualidade e convertendo para WebP
    """
    try:
        with Image.open(input_path) as img:
            # Converter para RGB se necessário (para PNG com transparência)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Criar fundo branco para imagens com transparência
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Redimensionar se muito grande
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Salvar como WebP otimizado
            img.save(output_path, 'WebP', quality=quality, optimize=True)
            
            # Calcular redução de tamanho
            original_size = os.path.getsize(input_path)
            new_size = os.path.getsize(output_path)
            reduction = ((original_size - new_size) / original_size) * 100
            
            print(f"✅ {input_path} -> {output_path}")
            print(f"   Tamanho original: {original_size / 1024:.1f}KB")
            print(f"   Novo tamanho: {new_size / 1024:.1f}KB")
            print(f"   Redução: {reduction:.1f}%\n")
            
    except Exception as e:
        print(f"❌ Erro ao otimizar {input_path}: {e}")

def main():
    # Diretório das imagens
    public_dir = "../public"
    
    # Imagens para otimizar
    images_to_optimize = [
        "placeholder-logo.png",
        "placeholder-user.jpg", 
        "placeholder.jpg"
    ]
    
    print("🚀 Iniciando otimização de imagens...\n")
    
    for image_name in images_to_optimize:
        input_path = os.path.join(public_dir, image_name)
        
        if os.path.exists(input_path):
            # Criar nome do arquivo otimizado
            name_without_ext = os.path.splitext(image_name)[0]
            output_path = os.path.join(public_dir, f"{name_without_ext}-optimized.webp")
            
            optimize_image(input_path, output_path)
        else:
            print(f"⚠️  Arquivo não encontrado: {input_path}")
    
    print("✨ Otimização concluída!")
    print("\n📝 Próximos passos:")
    print("1. Substitua as referências das imagens originais pelas versões otimizadas")
    print("2. Considere converter as imagens externas para WebP no Vercel Blob Storage")
    print("3. Implemente lazy loading para melhorar ainda mais a performance")

if __name__ == "__main__":
    main()
