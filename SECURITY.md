# Security Policy

## Supported Versions

We actively support the following versions of this starter kit:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in this starter kit, please report it responsibly:

### How to Report

1. **Email**: Send details to [security@your-domain.com](mailto:security@your-domain.com)
2. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- **Response Time**: We aim to respond within 48 hours
- **Acknowledgment**: You'll receive confirmation of receipt
- **Updates**: We'll keep you informed of our progress
- **Credit**: We'll credit you in our security advisories (unless you prefer to remain anonymous)

### Security.txt

This project includes a `security.txt` file at `/.well-known/security.txt` with contact information for security researchers.

## Security Features

This starter kit includes several security measures:

### Headers

- **HSTS**: HTTP Strict Transport Security
- **CSP**: Content Security Policy
- **X-Frame-Options**: Prevents clickjacking
- **X-Content-Type-Options**: Prevents MIME sniffing
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Controls browser features

### Content Security Policy

The CSP is configured to:

- Allow scripts from same origin and inline scripts (development)
- Allow styles from same origin, inline styles, and Google Fonts
- Allow images from same origin, data URLs, and HTTPS sources
- Allow fonts from same origin and Google Fonts
- Block object embeds and restrict frame ancestors

### Development vs Production

- **Development**: Relaxed CSP for development tools
- **Production**: Strict CSP for maximum security

## Best Practices

### For Developers

1. **Keep Dependencies Updated**

   ```bash
   pnpm audit
   pnpm update
   ```

2. **Use Environment Variables**

   ```env
   NUXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

3. **Review Security Headers**
   - Test with [securityheaders.com](https://securityheaders.com)
   - Use browser dev tools to verify headers

4. **Regular Security Audits**
   ```bash
   pnpm audit
   npm audit fix
   ```

### For Deployment

1. **Use HTTPS**: Always deploy with SSL/TLS
2. **Environment Variables**: Never commit secrets
3. **Security Headers**: Verify all headers are present
4. **Regular Updates**: Keep dependencies and server updated

## Security Checklist

Before deploying to production:

- [ ] All dependencies updated
- [ ] No security vulnerabilities (`pnpm audit`)
- [ ] Environment variables configured
- [ ] HTTPS enabled
- [ ] Security headers verified
- [ ] CSP configured for production
- [ ] Security.txt accessible
- [ ] Contact information updated

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Nuxt Security Module](https://nuxt-security.vercel.app/)
- [Security Headers](https://securityheaders.com/)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)

## Contact

For security-related questions or concerns:

- **Email**: [security@your-domain.com](mailto:security@your-domain.com)
- **Security.txt**: `/.well-known/security.txt`

---

**Thank you for helping keep this project secure!**
