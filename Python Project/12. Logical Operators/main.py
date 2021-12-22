# membuat fungsi logika dengan 2 persyaratan, dapat menggunakan fungsi AND dan OR
# Misalnya seorang mahasiswa diminta untuk menghadap ke akdemik dengan membawa berkas transkrip dan KHS
# buatlah hasil logika apakah mahasiswa diterima oleh akademik atau tidak

transkrip = True
khs = True

if transkrip and khs:
    print("Diterima oleh akademik")
else:
    print("Tidak diterima oleh akademik")


# sekarang jika akademik hanya meminta salah satu antara transkrip atau khs

transkrip = False
khs = False

if transkrip or khs:
    print("Diterima oleh akademik")
else:
    print("Tidak diterima oleh akademik")

# beberapa fungsi logika yang sering digunakan : AND, OR, NOT