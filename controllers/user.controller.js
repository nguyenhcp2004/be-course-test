const loginView = (req, res) => {
  res.render('pages/login')
}

const login = (req, res) => {
  // 1. validate dữ liệu

  // zod (hay tính custom cao nhưng mà khó dùng hơn)

  // 2. tạo user
  // hash password (dùng bcryptjs)
  // lưu xuống db

  // 3. tạo access token, refresh token (dùng jsonwebtoken)

  // 4. lưu xuống  refresh token db

  // 5. trả về client { accessToken, refreshToken }

  const { username, password } = req.body
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Vui lòng nhập tên tài khoản và mật khẩu' })
  }
  console.log('--------------------------------')
  console.log(username, password)
  console.log('--------------------------------')
  res.json({ message: 'Đăng nhập thành công' })
  // res.redirect('/home')
}

const registerView = (req, res) => {
  res.render('pages/register')
}

const homeView = (req, res) => {
  res.render('pages/home')
}

module.exports = { loginView, registerView, homeView, login }
