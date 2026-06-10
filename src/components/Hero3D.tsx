"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const W = canvas.offsetWidth || canvas.parentElement?.offsetWidth || 500
    const H = canvas.offsetHeight || canvas.parentElement?.offsetHeight || 500

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100)
    camera.position.z = 5.5

    const mGold = new THREE.LineBasicMaterial({ color: 0xb8893a, opacity: 0.75, transparent: true })
    const mSand = new THREE.LineBasicMaterial({ color: 0xc8b89e, opacity: 0.45, transparent: true })
    const mLight = new THREE.LineBasicMaterial({ color: 0xede5d8, opacity: 0.3, transparent: true })

    const icoEdges = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.3, 1))
    const ico = new THREE.LineSegments(icoEdges, mGold)

    function makeRing(radius: number, segs: number, mat: THREE.LineBasicMaterial) {
      const pts: THREE.Vector3[] = []
      for (let i = 0; i <= segs; i++) {
        const a = (i / segs) * Math.PI * 2
        pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0))
      }
      return new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), mat)
    }

    const ring1 = makeRing(2.0, 120, mSand)
    const ring2 = makeRing(2.5, 120, mLight)
    const ring3 = makeRing(1.6, 120, mLight)

    ring1.rotation.x = Math.PI / 2.5
    ring2.rotation.x = -Math.PI / 3
    ring2.rotation.y = Math.PI / 6
    ring3.rotation.x = Math.PI / 5
    ring3.rotation.z = Math.PI / 4

    const group = new THREE.Group()
    group.add(ico, ring1, ring2, ring3)
    scene.add(group)

    let tX = 0, tY = 0, cX = 0, cY = 0, base = 0
    let animId: number

    const onMouseMove = (e: MouseEvent) => {
      tX = (e.clientX / innerWidth - 0.5) * 1.2
      tY = (e.clientY / innerHeight - 0.5) * 0.8
    }
    window.addEventListener("mousemove", onMouseMove)

    function animate() {
      animId = requestAnimationFrame(animate)
      base += 0.004
      cX += (tX - cX) * 0.04
      cY += (tY - cY) * 0.04
      group.rotation.y = base + cX
      group.rotation.x = cY * 0.6 + Math.sin(base * 0.4) * 0.08
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("resize", onResize)
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  )
}
