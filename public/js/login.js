document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const username = form.username.value.trim()
    const password = form.password.value

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      const data = await response.json()

      if (response.ok) {
        alert('Đăng nhập thành công!')
        // Ví dụ redirect
        window.location.href = '/dashboard'
      } else {
        alert('Đăng nhập thất bại: ' + data.message)
      }
    } catch (error) {
      alert('Lỗi mạng, vui lòng thử lại.')
      console.error(error)
    }
  })
})
